import React from 'react';
import { Modal, Image } from 'react-native';

import { Wrapper, Title, WinnerContainer, IconContainer, ImageIcon, Button, ButtonText } from '../assets/styles';

export default function ClosedConn({ visible, back }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer>
          <Title>O adversário saiu da partida!</Title>
          <ImageIcon size="150px" source={require('../assets/img/arrows.png')} />
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