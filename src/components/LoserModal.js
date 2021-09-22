import React from 'react';
import { Modal, Image } from 'react-native';

import { Wrapper, Title, WinnerContainer, IconContainer, ImageIcon } from '../assets/styles';

export default function LoserModal({ visible }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer>
          <Title>Você Perdeu!</Title>
          <ImageIcon  size="150px" source={require('../assets/img/error.png')} />
        </WinnerContainer>
      </Wrapper>
    </Modal>
  );
}