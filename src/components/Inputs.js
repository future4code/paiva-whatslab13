import React from "react";
import styled from "styled-components";

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

class Inputs extends React.Component {

  state = {
    remetenteInput: "",
    mensagemInput: ""
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

    this.props.enviarMensagem(mensagem)

    this.setState({
      remetenteInput: "",
      mensagemInput: ""
    })

  }

  onKeyPress = (event) => {

    if( event.key === "Enter" ) {
      this.enviarMensagem()
    }

  }

  render() {
    return (
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
    )
  }
}

export default Inputs
