import {fetchRequest} from "src/api/utils"


export function get_one(publicationId) {
  return fetchRequest("/api/publication/getById", {publicationId});
}