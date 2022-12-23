import { Container, Logo, BackButton, BackIcon } from './styles';

import logoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }

      <Logo source={logoImg} />
    </Container>
  );
}

// showBackButton?:  ? é pra informar que é opcional
// showBackButton = false por padrao vai ser false
// se showBackButton for verdadeiro && (entao mostre o <BackButton>) com isso o componente fica flexivel. 