import React from 'react';
import { Modal, Image } from 'react-native';

import { Wrapper, Title, WinnerContainer, IconContainer, ImageIcon } from '../assets/styles';

import Button from './Button';

export default function WinnerModal({ visible, navigation, ws, gameData }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer border="#88e439aa">
          <Title>Você Ganhou!</Title>
          <ImageIcon size="150px" source={require("../assets/img/struck.png")} />
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