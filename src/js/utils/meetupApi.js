import getch from 'fetch-everywhere'
import {List, Map} from 'immutable'

import Cookies from 'universal-cookie';


const API_ROOT = 'https://integration.familysearch.org';
const GET_MEMBERS_URL = `${API_ROOT}/platform/tree/ancestry?generations=5&person=`;
const GET_ALBUM_URL = `${API_ROOT}/artifactmanager/albums/1/artifacts?includeDatesPlaces=true`;

export function getMembers(personId) {
  const cookies = new Cookies();
  console.log('cookies', cookies)
  return fetch(GET_ALBUM_URL/* + personId*/, {
    headers: {
      Authorization: 'Bearer ' + cookies.get('familysearch-sessionid'),
      Accept: 'application/json'
    }
  }).then(res => {
    console.log('response status', res.status); // 304! cache validated!
    return res.json().then(json => {
      console.log('json', json);
      return {json, res};
    });
  }).then(({json, response}) => {
    console.log('json', json)
    console.log('response', response)
    let members = []
    console.log('json.data', json.data, json)
    for (let result of json.artifactList.artifact) {
      if (result.thumbUrl) {
        const thumb = new URL(result.thumbUrl);
        thumb.protocol = 'http';
        thumb.host = 'localhost:8080';
        thumb.pathname = '/proxy' + thumb.pathname;
        members.push(Map({
          id: result.apid,
          name: result.title,
          photo_url: thumb.href
        }))
      }
    }

    return List(members)
  });


}