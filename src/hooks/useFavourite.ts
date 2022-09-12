import {ICharacter} from '@common';
import {RootState} from '@store';
import {useSelector} from 'react-redux';

export function useFavourite(): ICharacter[] {
  const favouriteAray = useSelector<RootState, ICharacter[]>(
    state => state.favourite,
  );
  return favouriteAray;
}
