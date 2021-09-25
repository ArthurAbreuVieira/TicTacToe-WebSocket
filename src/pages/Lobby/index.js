import React from 'react';
import { Image } from 'react-native';

import {
  Wrapper,
  Container,
} from '../../assets/styles';

import Button from '../../components/Button';

export default function Lobby({ navigation }) {
  return (
    <Wrapper color='#303030'>
      <Image source={require('../../assets/img/logo.png')}/>
      <Container>

        <Button
          route="Board"
          text="SINGLEPLAYER"
          navigation={navigation}
          params={{ singlePlayer: true }}
          textColor='#fff'
          color="#0091ff"
        />

        <Button
          route="Option"
          text="MULTIPLAYER"
          navigation={navigation}
          textColor='#fff'
          color="#f44e66"
        />

      </Container>
    </Wrapper>
  );
}