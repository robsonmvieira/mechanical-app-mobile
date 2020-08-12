import React from 'react';

import {
  Container,
  Form,
  LogoApp,
  LabelForm,
  Input,
  BtnLogin,
  ForgetPasswordLink,
  BtnLoginText,
} from './styles';
const Login: React.FC = () => {
  return (
    <>
      <Container>
        <LogoApp source={require('../../assets/icons/Logo.png')} />
        <Form>
          <LabelForm>Email: </LabelForm>
          <Input />
          <LabelForm>Password: </LabelForm>
          <Input />
        </Form>
        <BtnLogin>
          <BtnLoginText>Login</BtnLoginText>
        </BtnLogin>
        <ForgetPasswordLink>Ainda não possui Conta ?</ForgetPasswordLink>
      </Container>
    </>
  );
};

export default Login;
