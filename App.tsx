import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components'; // pra aplicar o theme global
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'; // importando as fontes para usar na aplicacao

import { Loading } from '@components/Loading';

import theme from './src/theme'; // pra aplicar o theme

import { Groups } from '@screens/Groups';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
       { fontsLoaded ? <Groups /> : <Loading /> }
    </ThemeProvider>
   
  );
}

