import React from 'react';
import { Dimensions } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { 
  Wrapper,
  Container,
  ImageIcon
} from '../../assets/styles';

import Button from '../../components/Button';

export default function Lobby({ navigation }) {
  return (
    <Wrapper>
      <LinearGradient 
          colors={['#00ff95', '#0091ff']}
          style={{
            position: 'absolute',
            flex: 1,
            width:'100%',
            height: Dimensions.get('window').height,
          }}
      />
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