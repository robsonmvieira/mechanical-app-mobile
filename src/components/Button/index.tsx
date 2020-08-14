import React from 'react';

import {Container, BtnLoginText} from './styles';
import {RectButtonProperties} from 'react-native-gesture-handler';

interface ReactButtonProps extends RectButtonProperties {
  children: string;
}

const Button: React.FC<ReactButtonProps> = ({children, ...rest}) => {
  return (
    <Container {...rest}>
      <BtnLoginText>{children}</BtnLoginText>
    </Container>
  );
};

export default Button;
