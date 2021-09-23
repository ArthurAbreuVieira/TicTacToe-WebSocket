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
  ImageIcon,
} from '../../assets/styles';

export default function Lobby({ navigation }) {
  return (
    <Wrapper>
      <Container>

        <Button onPress={() => navigation.navigate('Online')}>
          <IconContainer>
            <ImageIcon source={require('../../assets/img/wifi.png')}/>
          </IconContainer>
          <ButtonText>online</ButtonText>
        </Button>

        <Button onPress={() => navigation.navigate('Board', {singlePlayer: false, online: false})}>
          <IconContainer>
            <ImageIcon source={require('../../assets/img/location.png')}/>
          </IconContainer>
          <ButtonText>local</ButtonText>
        </Button>

        <Button onPress={() => navigation.navigate('Lobby')}>
          <IconContainer>
            <ImageIcon source={require('../../assets/img/arrows.png')}/>
          </IconContainer>
          <ButtonText>voltar</ButtonText>
        </Button>

      </Container>
    </Wrapper>
  );
}