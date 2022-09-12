import {cancelRequests, get} from '@api/helper';
import {routes} from '@api/routes';
import {ICharacter} from '@common';

export function getAllCharacters({search = ''}): Promise<ICharacter[]> {
  cancelRequests('getAllCharacters');

  let url = routes.getAllCharacter;
  if (search !== '') {
    url += `?name=${search}`;
  }
  return get({
    url,
    cancelKey: 'getAllCharacters',
  }).then(res => {
    if (res && res.cancel) {
      return;
    }
    const {status, data, message} = res;
    if (status) {
      return data || [];
    } else {
      const error = message || 'Something went wrong';
      throw new Error(error);
    }
  });
}
