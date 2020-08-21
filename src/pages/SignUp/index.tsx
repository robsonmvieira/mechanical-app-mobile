import React, { useCallback } from 'react';

import {
  Container,
  Form,
  LogoApp,
  ForgetPasswordLink,
  ForgetPassworButton,
} from './styles';

import Button from '../../components/Button';

import Logo from '../../assets/icons/Logo.png';
import Input from '../../components/Input';

const SignUp: React.FC = () => {


  const signUpnHandler = useCallback(() => {
    console.log('deu..')
  }, [])

  const goToLoginPage = useCallback(() => {

  }, [])

  return (
    <>
      <Container>
        <LogoApp source={Logo} />
        <Form>
          <Input description="Nome" />
          <Input description="Email" />
          <Input description="Senha" />
          <Input description="Confirmar Senha" />
        </Form>
        <Button onPress={signUpnHandler}>Cadastrar</Button>
        <ForgetPassworButton onPress={goToLoginPage}>
          <ForgetPasswordLink>Já possui Conta ?</ForgetPasswordLink>
        </ForgetPassworButton>
      </Container>
    </>
  );
};

export default SignUp;
