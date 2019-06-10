import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/5cfe9bb83200004f0045f1b8";

export function getStats() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
