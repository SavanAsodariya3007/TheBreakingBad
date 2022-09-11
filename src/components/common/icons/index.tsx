import React from 'react';
import Search from '../../../assets/icons/Search.svg';
import Backbutton from '../../../assets/icons/backButton.svg';
import Close from '../../../assets/icons/close.svg';
import Fillheart from '../../../assets/icons/fillHeart.svg';
import Heart from '../../../assets/icons/heart.svg';

export interface ISVGProps {
  width?: number;
  height?: number;
  color?: string;
}
export function SearchIcon(props:ISVGProps){ return <Search {...props} name="Search" />;}
export function BackbuttonIcon(props:ISVGProps){ return <Backbutton {...props} name="backButton" />;}
export function CloseIcon(props:ISVGProps){ return <Close {...props} name="close" />;}
export function FillheartIcon(props:ISVGProps){ return <Fillheart {...props} name="fillHeart" />;}
export function HeartIcon(props:ISVGProps){ return <Heart {...props} name="heart" />;}
