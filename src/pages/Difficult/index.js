import React from 'react';
import { View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

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

        <Title>Difficult: </Title>

        <Button onPress={() => navigation.navigate('Difficult')} color="rgba(21,255,0,.2)">
          <IconContainer>
          <Ionicons name="md-happy-sharp" size={24} color="green" />
          </IconContainer>
          <ButtonText>Easy</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Difficult')} color="rgba(255,247,0,.2)">
          <IconContainer>
          <MaterialCommunityIcons name="emoticon-neutral" size={24} color="yellow" />
          </IconContainer>
          <ButtonText>Hard</ButtonText>
        </Button>
        <Button onPress={() => navigation.navigate('Difficult')} color="rgba(255,0,0,.2)">
          <IconContainer>
          <MaterialCommunityIcons name="emoticon-angry" size={24} color="red" />
          </IconContainer>
          <ButtonText>Impossible</ButtonText>
        </Button>

      </Container>
    </LobbyWrapper>
  );
}