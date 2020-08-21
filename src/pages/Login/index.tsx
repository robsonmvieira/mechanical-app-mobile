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

const Login: React.FC = () => {

  const signInHandler = useCallback(() => {
    console.log('deu..')
  }, [])

  const goToSignUpPage = useCallback( () => {

  }, [])

  return (
    <>
      <Container>
        <LogoApp source={Logo} />
        <Form>
          <Input description="Email" />
          <Input description="Senha" />
        </Form>
        <Button onPress={signInHandler}>Login</Button>
        <ForgetPassworButton onPress={goToSignUpPage}>
          <ForgetPasswordLink>Ainda não possui Conta ?</ForgetPasswordLink>
        </ForgetPassworButton>
      </Container>
    </>
  );
};

export default Login;
