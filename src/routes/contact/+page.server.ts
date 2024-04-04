import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { SECRET_API_KEY } from '$env/static/private';

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

export const actions = {
	submit: async ({ request }) => {
		const formData = await request.formData();
		const fields: Fields = {
			name: formData.get('name')?.toString() || '',
			email: formData.get('email')?.toString() || '',
			message: formData.get('message')?.toString() || ''
		}
		
		const errors: FieldErrors = {};
		for(const [key, val] of Object.entries(fields)) {
			if(!val.toString()) {
				const fieldName = key.toString() as keyof FieldErrors;
				errors[fieldName] = true;
			}
		}

		if(Object.keys(errors).length > 0) return fail(400, { errors: errors });

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
			console.log(result)
		}

	}
} satisfies Actions;
