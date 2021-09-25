import React from 'react';
import { Modal } from 'react-native';

import { Wrapper, Title, WinnerContainer, ImageIcon } from '../assets/styles';

import Button from './Button';

export default function DrawModal({ visible, navigation, ws }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer border="#88e439aa">
          <Title>Empate!</Title>
          <ImageIcon size="150px" source={require("../assets/img/unamused.png")} />
          <Button 
            route="Lobby" 
            text="VOLTAR"
            navigation={navigation} 
            textColor='#fff'
            color="#0f0d21"
            border="#5634cb"
            ws={ws}
          />
        </WinnerContainer>
      </Wrapper>
    </Modal>
  );
}