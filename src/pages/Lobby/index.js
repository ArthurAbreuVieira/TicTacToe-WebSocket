import React from 'react';

import {
  Wrapper,
  Container,
  ImageIcon
} from '../../assets/styles';

import Button from '../../components/Button';

export default function Lobby({ navigation }) {
  return (
    <Wrapper>
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