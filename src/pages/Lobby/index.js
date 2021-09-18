import React from 'react';
import { View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { 
  LobbyWrapper,
  Container,
  Title,
  Button,
  ButtonText,
  IconContainer
} from '../../assets/styles';

export default function Lobby({ navigation }) {
  return (
    <LobbyWrapper>
      <Title>OCTOTHORPE</Title>
      <Container>

        <Title>Lobby: </Title>

        <Button onPress={() => navigation.navigate('Board', {singlePlayer: true})} color="#794ce3">
          <IconContainer>
            <FontAwesome name="gamepad" size={24} color="white" />
          </IconContainer>
          <ButtonText>SinglePlayer</ButtonText>
        </Button>

        <Button onPress={() => navigation.navigate('Board', {singlePlayer: false})} color="#794ce3">
          <IconContainer>
            <FontAwesome name="gamepad" size={24} color="white" />
          </IconContainer>
          <ButtonText>MultiPlayer</ButtonText>
        </Button>

      </Container>
    </LobbyWrapper>
  );
}