import React from "react";
import styled from "styled-components";
import './App.css';

const Main = styled.main`
  display: flex;  
  background-color: #e5ddd5;
  max-width: 600px;
  width: 100%;
  border: 1px solid #000000;
  height: 100vh;
  margin: 0 auto;
  align-items: flex-end;
  flex-wrap:wrap;

`

const Form = styled.form`
  display: grid;
  height: 5vh;
  grid-template-columns: 2fr 7fr 1fr;
  grid-gap: 1%;
  padding: 1%;
  max-width: 100%;
`

const Input = styled.input`

  width: 100%;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
 
`
const Icones = styled.img`
width: 05vw;`

const Button = styled.button`
  background-color: #efefef;
  width: 100%;
  padding: 8px;
  border: 0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: color ease-in-out 300ms, background-color ease-in-out 300ms, transform ease-in-out 300ms;

  &:hover {
    background-color: #d9d8d8;
    color: #000000cc
  }

  &:active {
    transform: translateY(6px)
  }
`
const Balao = styled.div`
display:flex;
background: white;
align-items: flex-end;
width:auto;
height: 10vh;
line-height:10vh;`

const Header = styled.section`
display: flex;
width: 100vw;
height: 05vh;
color: white;
background-color: #015f57;
`
const Nome= styled.h1`
font-size: 1em;`



class App extends React.Component {

  state = {
    remetenteInput: "",
    mensagemInput: "",
    mensagens: []
  }

  onChangeRemetenteInput = (event) => {

    this.setState({ remetenteInput: event.target.value })

  }

  onChangeMensagemInput = (event) => {

    this.setState({ mensagemInput: event.target.value })

  }

  enviarMensagem = () => {

    const mensagem = {
      remetente: this.state.remetenteInput,
      mensagem: this.state.mensagemInput
    }

    if( !mensagem.remetente || !mensagem.mensagem ) {
      return alert("A mensagem precisa de um usuário e de um conteúdo")
    }


    const novasMensagens = this.state.mensagens
    novasMensagens.push(mensagem)
    this.setState({
      remetenteInput: "",
      mensagemInput: "",
      mensagems: novasMensagens
    })

  }

  onKeyPress = (event) => {

    if(event.key === "Enter") {

      this.enviarMensagem()

    }

  }

  deleteMensagem = (deletar) => {

    if( !window.confirm("Tem certeza que deseja deletar essa mensagem?") ) {

      return

    }

    this.setState({
      mensagens: this.state.mensagens.filter( (_, index) => index !== deletar)
    })

  }

  render() {
    const mensagem = this.state.mensagens.map((sms, index)=>
    <div>
      <Balao onDoubleClick={ () => this.deleteMensagem(index) }>
    <h3>{sms.remetente}</h3>:<p>{sms.mensagem}</p>
    </Balao>
    </div>
    ) 
    return (
      <Main>
        <Header>
          <Nome>Júllia Izidorio</Nome>
          </Header>
          
        <Balao>{mensagem}</Balao>
        
        <Form>
        <Input 
          value={ this.state.remetenteInput }
          onChange={ this.onChangeRemetenteInput } 
          placeholder="Usuário"
          onKeyPress={ this.onKeyPress }
        />
        <Input 
          value={ this.state.mensagemInput }
          onChange={ this.onChangeMensagemInput }
          placeholder="Mensagem"
          onKeyPress={ this.onKeyPress }
        />
        <Button type="button" onClick={ this.enviarMensagem } >
          Enviar
        </Button>
      </Form>
      </Main>
    )
  }
}

export default App
