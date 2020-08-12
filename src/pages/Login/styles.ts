import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  align-items: center;
`;

export const LogoApp = styled.Image`
  margin-top: 15px;
`;

export const Form = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-start;
  margin-top: 90px;
`;
export const LabelForm = styled.Text`
  font-size: 16px;
  line-height: 19px;
  color: #039bff;
  font-style: normal;
  font-weight: normal;
`;

export const Input = styled.TextInput`
  height: 40px;
  margin-bottom: 50px;
  background: #e5e1e1;
`;
export const BtnLogin = styled(RectButton)`
  width: 302px;
  height: 40px;
`;
export const BtnLoginText = styled.Text`
  width: 42px;
  height: 19px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;
export const ForgetPasswordLink = styled.Text`
  /* width: 134px; */
  height: 14px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #001c55;
`;
