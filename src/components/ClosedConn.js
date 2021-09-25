import React from 'react';
import { Modal, Image } from 'react-native';

import Button from './Button';

import { Wrapper, Title, WinnerContainer, IconContainer, ImageIcon } from '../assets/styles';

export default function ClosedConn({ visible, ws, navigation }) {
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