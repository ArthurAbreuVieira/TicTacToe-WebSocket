import React from 'react';
import { Modal } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { Wrapper, Title, WinnerContainer, ButtonText } from '../assets/styles';

import Button from './Button';

export default function LocalWinner({ visible, winner, navigation }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <Wrapper color="rgba(0,0,0,.5)">
        <WinnerContainer>
          <Title>Ganhador:</Title>
          <FontAwesome name={winner === "Player 1" ? "close" : "circle-o"} size={150} color={winner === "Player 1" ? "#88e439" : "#ff3049"} />
        </WinnerContainer>
        <Button 
          route="Lobby" 
          text="VOLTAR"
          navigation={navigation} 
          textColor='#fff'
          color="#303030"
          border="#0091ff"
        />
      </Wrapper>
    </Modal>
  );
}