import { client } from '$lib/sanity.js'

export async function load() {
  const data = await client.fetch(`*[_type == "event"] | order(eventDate asc)`);
  const clientData = await client.clone();

  if (data && clientData) {
    return {
      event: data,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  };
}