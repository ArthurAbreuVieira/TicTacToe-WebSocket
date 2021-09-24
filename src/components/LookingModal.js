import React from 'react';
import { Modal, Image, View } from 'react-native';

import { Wrapper, Title } from '../assets/styles';

import Button from './Button';

export default function LookingModal({ visible, navigation, ws }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      overFullScreen
    >
      <Wrapper style={{ justifyContent: "space-between" }} color="#05040f">
        <Title>Procurando adversário</Title>
        <Image source={require('../assets/img/looking.gif')} style={{ width: 400, height: 400 }} />
        <Button 
          route="Lobby" 
          text="VOLTAR"
          navigation={navigation} 
          textColor='#fff'
          color="#0f0d21"
          border="#5634cb"
          ws={ws}
        />
      </Wrapper>
    </Modal>
  );
}


