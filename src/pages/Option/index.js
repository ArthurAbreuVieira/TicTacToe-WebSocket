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

        <Button onPress={() => navigation.navigate('Online', {singlePlayer: false})}>
          <IconContainer>
            <FontAwesome name="gamepad" size={24} color="white" />
          </IconContainer>
          <ButtonText>online</ButtonText>
        </Button>

        <Button onPress={() => navigation.navigate('Board', {singlePlayer: false, online: false})}>
          <IconContainer>
            <FontAwesome name="gamepad" size={24} color="white" />
          </IconContainer>
          <ButtonText>local</ButtonText>
        </Button>

      </Container>
    </LobbyWrapper>
  );
}