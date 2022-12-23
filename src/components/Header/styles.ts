import styled from 'styled-components/native';
import { CaretLeft } from 'phosphor-react-native'; // (CaretLeft) para estilizar por entre () pois n é um componente padrao.

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1
`;

export const BackIcon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE
}))`
  
`;

// attrs para acessar os atributos.

// flex: 1 em BackButton: nesse caso usei apenas pra empurrar o a logo png pra direita.