import React from 'react';
import { Modal, Image } from 'react-native';

import { Wrapper, Title, WinnerContainer, IconContainer, ImageIcon, Button, ButtonText } from '../assets/styles';

export default function WinnerModal({ visible, back }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer>
          <Title>Você Ganhou!</Title>
          <ImageIcon size="150px" source={require('../assets/img/trophy.png')} />
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