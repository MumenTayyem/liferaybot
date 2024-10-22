import getToken from "./get-token.mjs";

export default async function tokenizedFetch(url, method, body = null) {
  const tokenObj = await getToken();

  const token = tokenObj.access_token;

  return fetch(url, {
    method: method,
    body: body ? body : null,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
  });
}
