import React from 'react';
import { Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import {
  Wrapper,
  Container,
  ImageIcon
} from '../../assets/styles';

import Button from '../../components/Button';

export default function Lobby({ navigation }) {
  return (
    <Wrapper>
      <LinearGradient 
          colors={['#00ff95', '#0091ff']}
          style={{
            position: 'absolute',
            flex: 1,
            width:'100%',
            height: Dimensions.get('window').height,
          }}
      />
      <Container>

        <Button
          route="Board"
          icon={<ImageIcon source={require(`../../assets/img/gamepad.png`)} />}
          text="singleplayer"
          navigation={navigation}
          params={{ singlePlayer: true }}
        />

        <Button
          route="Option"
          icon={<ImageIcon source={require(`../../assets/img/network.png`)} />}
          text="multiplayer"
          navigation={navigation}
        />

      </Container>
    </Wrapper>
  );
}