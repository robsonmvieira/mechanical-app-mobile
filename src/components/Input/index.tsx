import React from 'react';

import {Container, LabelForm, TextInput} from './styles';
import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  description: string;
}

const Input: React.FC<InputProps> = ({description, ...props}) => {
  return (
    <Container>
      <LabelForm>{description}</LabelForm>
      <TextInput {...props} />
    </Container>
  );
};

export default Input;
