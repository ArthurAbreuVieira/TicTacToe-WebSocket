import React from 'react';
import { View, Text, Image } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { 
  Wrapper,
  Container,
  Title,
  Button,
  ButtonText,
  IconContainer,
  ImageIcon
} from '../../assets/styles';

export default function Lobby({ navigation }) {
  return (
    <Wrapper>
      <Container>

        <Title>Lobby: </Title>

        <Button onPress={() => navigation.navigate('Board', {singlePlayer: true})}>
          <IconContainer>
            <ImageIcon source={require('../../assets/img/gamepad.png')}/>
          </IconContainer>
          <ButtonText>SinglePlayer</ButtonText>
        </Button>

        <Button onPress={() => navigation.navigate('Option')}>
          <IconContainer>
            <ImageIcon source={require('../../assets/img/network.png')}/>
          </IconContainer>
          <ButtonText>MultiPlayer</ButtonText>
        </Button>

      </Container>
    </Wrapper>
  );
}