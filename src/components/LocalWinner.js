import React from 'react';
import { Modal } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { Wrapper, Title, WinnerContainer, Button, ButtonText } from '../assets/styles';

export default function LocalWinner({ visible, back, winner }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer>
          <Title>Ganhador:</Title>
          <FontAwesome name={winner === "Player 1" ? "close" : "circle-o"} size={150} color={winner === "Player 1" ? "rgb(0,255,0)" : "rgb(255,0,0)"} />
        </WinnerContainer>
        <Button padding="0px" color="rgba(0, 153, 255, .8)" style={{
          justifyContent: 'center',
          alignItems: 'center',
        }} onPress={() => back()}>
          <ButtonText margin="0px">Voltar</ButtonText>
        </Button>
      </Wrapper>
    </Modal>
  );
}