import { SECRET_SANITY_KEY } from '$env/static/private';
import { createClient } from "@sanity/client";

export const client = createClient({
	projectId: "1chuxo97",
  	dataset: "production",
  	apiVersion: "2021-10-21",
  	useCdn: false,
    token: SECRET_SANITY_KEY,
})