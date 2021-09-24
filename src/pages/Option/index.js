import React from 'react';

import { 
  Wrapper,
  Container,
} from '../../assets/styles';

import Button from '../../components/Button';

export default function Lobby({ navigation }) {
  return (
    <Wrapper color='#303030'>

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
          color="#303030"
          border="#0091ff"
        />

      </Container>
    </Wrapper>
  );
}