import {fetchRequest} from "src/api/utils"

export function get(userId, orderBy, page, search) {
  return fetchRequest("/api/publication/get", {userId, orderBy, page, search});
}