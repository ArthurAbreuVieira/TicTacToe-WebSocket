import React from 'react';

import {
  Button,
  ButtonText,
  IconContainer,
} from '../assets/styles';

export default function({ route, icon, text, params = {}, navigation }) {
  return (
    <Button onPress={() => navigation.navigate(route, params)}>
      <IconContainer>
        {icon}
      </IconContainer>
      <ButtonText>{text}</ButtonText>
    </Button>
  );
}