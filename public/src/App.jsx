import { Header, Text } from './App.styles';
import IconsBar from './components/IconsBar';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Header>koshelev.works</Header>
      <IconsBar />
      <Text>hi! i am denis and this is my website. i do here the most random stuff that my mind came up with just for fun.</Text>
    </Layout>
  );
}

export default App;
