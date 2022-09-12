import {useQuery} from '@tanstack/react-query';
import {getAllCharacters} from '@slice/api';

export function useCharacters(search = '') {
  return useQuery(['allCharacter', search], () => getAllCharacters({search}));
}
