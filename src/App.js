import React from "react";
import styled from "styled-components";
import './App.css';

const Main = styled.main`
  background-color: #e5ddd5;
  max-width: 600px;
  width: 100%;
  border: 1px solid #000000;
  height: 100vh;
  margin: 0 auto;
`

const Form = styled.form`
  display: grid;
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

class App extends React.Component {

  state = {
    remetenteInput: "",
    mensagemInput: "",
    mensagems: []
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


    const novasMensagens = this.state.mensagems
    novasMensagens.push(mensagem)
    this.setState({
      remetenteInput: "",
      mensagemInput: "",
      mensagems: novasMensagens
    })

  }

  render() {
    return (
      <Main>
      <Form>
        <Input 
          value={ this.state.remetenteInput }
          onChange={ this.onChangeRemetenteInput } 
          placeholder="Usuário"
        />
        <Input 
          value={ this.state.mensagemInput }
          onChange={ this.onChangeMensagemInput }
          placeholder="Mensagem"

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
