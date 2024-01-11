

import { useState } from 'react';
import gitlogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';

import { Container } from './styles';

function App() {

  const [repos, setRepos] = useState([]);

  return (
    <Container>
      <img src={gitlogo} width={72} height={72} alt='Logotipo Github' /> 
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
