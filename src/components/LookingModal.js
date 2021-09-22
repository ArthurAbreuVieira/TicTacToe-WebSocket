import React from 'react';
import { Modal, Image, View } from 'react-native';

import { Wrapper, Title, Button, ButtonText } from '../assets/styles';

export default function LookingModal({ visible, back }) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      overFullScreen
    >
      <Wrapper style={{ justifyContent: "space-between" }}>
        <Title>Procurando adversário</Title>
        <Image source={require('../assets/img/loader2.gif')} style={{ width: 150, height: 150 }} />
        <Button padding="0px" color="rgba(0, 153, 255, .8)" style={{
          justifyContent: 'center',
          alignItems: 'center',
        }} onPress={() => back()}>
          <ButtonText margin="0px">Voltar</ButtonText>
        </Button>
      </Wrapper>
    </Modal>
  );
}