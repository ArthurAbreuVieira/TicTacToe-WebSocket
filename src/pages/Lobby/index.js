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
      <Container>

        <Title>Lobby: </Title>

        <Button onPress={() => navigation.navigate('Board', {singlePlayer: true})}>
          <IconContainer>
            <FontAwesome name="gamepad" size={24} color="white" />
          </IconContainer>
          <ButtonText>SinglePlayer</ButtonText>
        </Button>

        <Button onPress={() => navigation.navigate('Option', {singlePlayer: false})}>
          <IconContainer>
            <FontAwesome name="gamepad" size={24} color="white" />
          </IconContainer>
          <ButtonText>MultiPlayer</ButtonText>
        </Button>

      </Container>
    </LobbyWrapper>
  );
}