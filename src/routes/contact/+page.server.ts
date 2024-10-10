import { error, fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SECRET_API_KEY, SECRET_TURN_KEY } from '$env/static/private';

export interface Fields {
	name?: string,
	email?: string,
	message?: string
}

export interface FieldErrors {
	name?: boolean,
	email?: boolean,
	message?: boolean
}

interface TokenValidateResponse {
    'error-codes': string[];
    success: boolean;
    action: string;
    cdata: string;
}

async function validateToken(token: string, secret: string) {
    const response = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                response: token,
                secret: secret,
            }),
        },
    );

    const data: TokenValidateResponse = await response.json();

    return {
        // Return the status
        tokenSuccess: data.success,

        // Return the first error if it exists
        tokenError: data['error-codes']?.length ? data['error-codes'][0] : null,
    };
}

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const fields: Fields = {
			name: formData.get('name')?.toString() || '',
			email: formData.get('email')?.toString() || '',
			message: formData.get('message')?.toString() || ''
		}
		const token = formData.get('cf-turnstile-response')?.toString();
		// TODO: display tokenError errors?
        const { tokenSuccess } = await validateToken(token || '', SECRET_TURN_KEY);
		
		const errors: FieldErrors = {};
		for(const [key, val] of Object.entries(fields)) {
			if(!val.toString()) {
				const fieldName = key.toString() as keyof FieldErrors;
				errors[fieldName] = true;
			}
		}

		if(Object.keys(errors).length > 0 && !tokenSuccess) return fail(400, { errors: errors });

		formData.delete('cf-turnstile-response')
		formData.append('access_key', SECRET_API_KEY);
		const object = Object.fromEntries(formData);
  		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json
		});

		const result = await response.json();
		if (result.success) {
			return { success: true } 
		} else {
			return error(400, "Bad Request");
		}

	}
} satisfies Actions;
