import React from 'react';
import { Modal, Image } from 'react-native'; 

import { LobbyWrapper, Title } from '../assets/styles';

export default function LookingModal({ visible }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      overFullScreen
    >
      <LobbyWrapper>
        <Title>Procurando adversário</Title>
        <Image source={require('../assets/img/loader2.gif')} style={{width:150,height:150}}/>
      </LobbyWrapper>
    </Modal>
  );
}