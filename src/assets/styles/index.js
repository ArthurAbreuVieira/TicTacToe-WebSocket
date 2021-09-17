import styled from 'styled-components/native';

export const LobbyWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #222747;
  justify-content: flex-end;
  padding: 50px 0 50px 10px;
`;

export const Container = styled.View`
  /* height: 300px; */
  width: 100%;
  /* background-color: rgba(0,0,0,.5); */
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;

`;

export const Button = styled.TouchableOpacity`
  /* background-color: #383e6e; */
  background-color: ${props => props.color || "#383e6e"};
  width: 75%;
  height: 80px;
  border-radius: 25px;
  padding-left: 20px;
  margin-bottom: 20px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border: 4px solid rgba(0,0,0,0.4);
`;

export const ButtonText = styled.Text`
  /* color: rgba(0, 0, 0, .4); */
  color: #fff;
  text-shadow: 0 0 10px #000;
  font-size: 30px;
  font-weight: 700;
  margin-left: 20px;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 15px;
  background-color: rgba(0, 0, 0, .4);
  justify-content: center;
  align-items: center;
`;