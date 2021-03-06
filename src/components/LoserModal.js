import React, { useState } from 'react';
import { useEffect } from 'react';
import { Modal, Image } from 'react-native';

import { Wrapper, Title, WinnerContainer, ImageIcon } from '../assets/styles';

import Button from './Button';

let icon = '';
export default function LoserModal({ visible, navigation, ws, gameData }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer border="#ff3049aa">
          <Title>Você Perdeu!</Title>
          <ImageIcon size="150px" source={require("../assets/img/rage2.png")} />
          <Button 
              route="Lobby" 
              text="VOLTAR"
              navigation={navigation} 
              textColor='#fff'
              color="#0f0d21"
              border="#5634cb"
              ws={ws}
              gameData={gameData}
            />
        </WinnerContainer>
      </Wrapper>
    </Modal>
  );
}