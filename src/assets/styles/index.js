import styled from 'styled-components/native';

export const LobbyWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #1f2241;
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

export const BoardContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: #1f2241;
  justify-content: space-around;
  align-items: center;
`;

export const PlayersContainer = styled.View`
  width: 100%;
`;

export const Player = styled.View`
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "70px"};
  height: ${({ size }) => size || "70px"};

`;

export const PlayerIcon = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: 5px solid green;
  border-radius: 55px;
`;

export const Board = styled.View`
  width: 100%;
  height: 330px;
  justify-content: space-around;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Square = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: ${({ bg }) => bg || "rgba(0, 0, 0, .3)"};
  border: 5px solid gray;
  margin-left: ${({ margin_left }) => margin_left || "0px"};
  margin-right: ${({ margin_right }) => margin_right || "0px"};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 90px;
  font-weight: 900;
  color: ${({ color }) => color || 'green'};
`;