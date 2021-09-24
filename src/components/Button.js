import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';

import {
  Button,
  ButtonText,
  IconContainer,
} from '../assets/styles';

export default function ({ 
  route, 
  icon, 
  color, 
  border, 
  gradient, 
  text, 
  textColor, 
  params = {}, 
  navigation,
  width,
  height
}) {
  return (
    <Button 
      color={color || "#fff"} 
      border={border || 'rgba(0,0,0,0.15)'} 
      onPress={() => navigation.navigate(route, params)}
      width={width || '90%'}
      height={height || '55px'}
    >
      {gradient &&
        <LinearGradient
          colors={gradient}
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            borderRadius: 50
          }}
        />
      }
      <ButtonText color={textColor}>{text}</ButtonText>
      {icon &&
        <IconContainer>
          {icon}
        </IconContainer> 
      }
    </Button>
  );
}