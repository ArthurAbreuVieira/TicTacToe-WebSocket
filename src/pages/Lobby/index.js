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

        <Button onPress={() => navigation.navigate('Difficult')}>
          <IconContainer>
            <FontAwesome name="gamepad" size={24} color="white" />
          </IconContainer>
          <ButtonText>Play</ButtonText>
        </Button>

      </Container>
    </LobbyWrapper>
  );
}