import React from 'react';
import { Modal } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { Wrapper, Title, WinnerContainer, ButtonText } from '../assets/styles';

import Button from './Button';

export default function LocalWinner({ visible, winner, navigation, ws }) {
  const icons = [
    "https://www.flaticon.com/free-icon/sunglasses_3706782",
    "grin",
    "heart-eyes",
    "hello",
    "hugging",
    "smile",
    "struck",
    "sunglasses",
    "smile2"
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer border={winner === "Player 1" ? "#88e439aa" : "#ff3049aa"}>
          <Title>Ganhador:</Title>
          <FontAwesome name={winner === "Player 1" ? "close" : "circle-o"} size={150} color={winner === "Player 1" ? "#88e439" : "#ff3049"} />
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