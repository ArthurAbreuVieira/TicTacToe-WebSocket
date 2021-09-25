import React from 'react';
import { Image } from 'react-native';

import { 
  Wrapper,
  Container,
} from '../../assets/styles';

import Button from '../../components/Button';

export default function Lobby({ navigation }) {
  return (
    <Wrapper color='#303030'>
      <Image source={require('../../assets/img/logo.png')}/>
      <Container>

        <Button 
          route="Online" 
          text="ONLINE" 
          navigation={navigation}
          textColor='#fff'
          color="#f44e66"
        />
        <Button 
          route="Board" 
          text="LOCAL" 
          navigation={navigation}
          params={{singlePlayer: false, online: false}} 
          textColor='#fff'
          color="#0091ff"
        />
        <Button 
          route="Lobby" 
          text="VOLTAR"
          navigation={navigation} 
          textColor='#fff'
          color="#0f0d21"
          border="#5634cb"
        />

      </Container>
    </Wrapper>
  );
}