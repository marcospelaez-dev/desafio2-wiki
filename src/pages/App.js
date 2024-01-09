
import gitlogo from '../assets/github.png';

import { Container } from './styles';

function App() {
  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='Logotipo Github' /> 
    </Container>
  );
}

export default App;
