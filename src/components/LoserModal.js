import React from 'react';
import { Modal, Image } from 'react-native';

import { Wrapper, Title, WinnerContainer, ImageIcon } from '../assets/styles';

import Button from './Button';

export default function LoserModal({ visible, navigation, ws }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer>
          <Title>Você Perdeu!</Title>
          <ImageIcon size="150px" source={require('../assets/img/error.png')} />
        </WinnerContainer>
        <Button 
          route="Lobby" 
          text="VOLTAR"
          navigation={navigation} 
          textColor='#fff'
          color="#303030"
          border="#0091ff"
          ws={ws}
        />
      </Wrapper>
    </Modal>
  );
}