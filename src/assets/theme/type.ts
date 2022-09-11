export interface Theme {
  fonts: {
    bold: string;
    light: string;
    thin: string;
  };
  colors: {
    white: string;
    black: string;
    primary: string;
    secondary: string;
    placeHolderColor: string;
  };
  fontSize: number[];
  spacer: number[];
}

export interface ITheme {
  theme: Theme;
}
