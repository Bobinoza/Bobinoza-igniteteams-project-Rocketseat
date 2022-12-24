import { TouchableOpacityProps } from 'react-native'; // importando a tipagem. Para o coponente GroupCard entender que é um butão e conseguir usar o onPress
import { Container, Icon, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
}

export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>
        {title}
      </Title>
    </Container>
  );
}