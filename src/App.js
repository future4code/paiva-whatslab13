import styled from 'styled-components';
import './App.css';
import Inputs from './components/Inputs';

const Main = styled.main`
  background-color: #e5ddd5;
  max-width: 600px;
  width: 100%;
  border: 1px solid #000000;
  height: 100vh;
  margin: 0 auto;
`

function App() {
  return (
    <Main>
      <Inputs enviarMensagem={ (mensagem) => console.log(mensagem) } />
    </Main>
  );
}

export default App;
