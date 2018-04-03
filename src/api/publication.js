import {fetchRequest} from "src/api/utils"


export function get_one(publicationId) {
  return fetchRequest("/api/publication/getById", {publicationId});
}

export function get_list(userId, orderBy, page, search) {
  return fetchRequest("/api/publication/get", {userId, orderBy, page, search});
}


export function get_comments_list(publicationId, page) {
  return fetchRequest("/api/publication/getComments", {publicationId, page});
}
