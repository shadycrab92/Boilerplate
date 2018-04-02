import "whatwg-fetch";
import queryString from "query-string";


import {requestTypes} from "src/constants/_all";

export function fetchRequest(url, params = {}, type = requestTypes.GET) {
  let fetchParams = {
    method: type,
    credentials: "same-origin",
    headers: new Headers({
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    })
  };

  //TODO: наверное стоит перейти на JSON, x-www-form-urlencoded - выглядит бредовенько
  if (type != requestTypes.GET) {
    let formBody = [];

    for (const property in params) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");
    fetchParams.body = formBody;
  } else {
    Object.keys(params).forEach(k => (!params[k] && params[k] !== undefined) && delete params[k]);
    const stringParams = queryString.stringify(params);
    url += stringParams ? "/?" + queryString.stringify(params) : "";
  }

  let serverError = false;

  return fetch(url, fetchParams)
    .then((response) => {
      if (response.status >= 400) {
        serverError = true;
      }
      return serverError ? null : response.json();
    }).then((json)=>{

      const cleanResponse = {
        internalError: serverError, result: json
      };

      return cleanResponse;
    });
}
