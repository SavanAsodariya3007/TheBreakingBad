import {ICharacter} from '@common';
import {addNewCharacter, removeCharacter} from '@slice/favourite';
import {AppDispatch} from '@store';
import {useDispatch} from 'react-redux';
import {useFavourite} from './useFavourite';

export function useToggleFavourite() {
  const favourite = useFavourite();
  const dispatch = useDispatch<AppDispatch>();

  function isFavourite(item: ICharacter) {
    return favourite.map(e => e.char_id).includes(item.char_id);
  }

  function onToogle(item: ICharacter) {
    const isFav = isFavourite(item);
    if (isFav) {
      dispatch(removeCharacter(item));
    } else {
      dispatch(addNewCharacter(item));
    }
  }

  return {
    isFavourite,
    onToogle,
    favouriteList: favourite,
  };
}
