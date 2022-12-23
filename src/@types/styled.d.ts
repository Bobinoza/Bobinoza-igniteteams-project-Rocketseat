import 'styled-components';
import theme from '../theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;
  
  export interface DefaultTheme extends ThemeType {}
}


// export interface DefaultTheme extends ThemeType
// exportando de Defaulttheme e estendendo para a tipagem ThemeType
