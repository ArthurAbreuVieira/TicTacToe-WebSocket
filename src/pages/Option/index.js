import React from 'react';

import { 
  Wrapper,
  Container,
  ImageIcon
} from '../../assets/styles';

import Button from '../../components/Button';

export default function Lobby({ navigation }) {
  return (
    <Wrapper>
      <Container>

        <Button 
          route="Online" 
          icon={<ImageIcon source={require(`../../assets/img/wifi.png`)}/>} 
          text="online" 
          navigation={navigation}
        />
        <Button 
          route="Board" 
          icon={<ImageIcon source={require(`../../assets/img/location.png`)}/>} 
          text="local" 
          navigation={navigation}
          params={{singlePlayer: false, online: false}} 
        />
        <Button 
          route="Lobby" 
          icon={<ImageIcon source={require(`../../assets/img/arrows.png`)}/>} 
          text="voltar"
          navigation={navigation} 
        />

      </Container>
    </Wrapper>
  );
}