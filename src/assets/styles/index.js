import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ color }) => color || "rgb(15, 15, 15)"};
  justify-content: center;
  align-items: center;
  padding: 50px 0 50px 10px;
`;

export const Container = styled.View`
  /* height: 300px; */
  width: 100%;
  /* background-color: rgba(0,0,0,.5); */
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ color }) => color || "#fff"};
  font-size: ${({ size }) => size || "32px"};
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  /* background-color: #383e6e; */
  background-color: ${props => props.color || "rgb(255, 255, 255)"};
  width: 90%;
  height: 55px;
  border-radius: 50px;
  /* padding-left: ${({ padding }) => padding || "20px"}; */
  margin-bottom: 20px;
  /* justify-content: flex-start; */
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border: 1px solid ${props => props.border || 'rgba(0,0,0,0.15)'};
`;

export const ButtonText = styled.Text`
  /* color: rgba(0, 0, 0, .4); */
  color: ${props => props.color || "black"};
  font-size: 20px;
  font-weight: 700;
  /* margin-left: ${({ margin }) => margin || "20px"}; */
  text-shadow: 0 0 8px black;
`;

export const IconContainer = styled.View`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  border-radius: 23px;
  background-color: rgba(0, 0, 0, .4);
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: ${({ size }) => size || "40px"};
  height: ${({ size }) => size || "40px"};
`;

export const BoardContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: rgb(15, 15, 15);
  justify-content: space-around;
  align-items: center;
`;

export const PlayersContainer = styled.View`
  width: 100%;
`;

export const Player = styled.View`
  justify-content: center;
  align-items: center;
  width: ${({ size }) => size || "90px"};
  height: ${({ size }) => size || "90px"};
`;

export const PlayerIcon = styled.View`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  border: ${({ borderColor }) => borderColor || "5px solid rgb(110, 110, 110)"};
  border-radius: 55px;
`;

export const Board = styled.View`
  width: 100%;
  height: 330px;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Square = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: ${({ bg }) => bg || "rgba(0, 0, 0, .3)"};
  border: 1px solid gray;
  /* margin-left: ${({ margin_left }) => margin_left || "0px"};
  margin-right: ${({ margin_right }) => margin_right || "0px"}; */
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  justify-content: center;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 90px;
  font-weight: 900;
  color: ${({ color }) => color || 'green'};
`;

export const WinnerContainer = styled.View`
  width: 80%;
  height: 350px;
  background-color: rgb(49, 49, 49);
  border-radius: 20px;
  justify-content: space-evenly;
  align-items: center;
`;

export const BackButtonContainer = styled.TouchableOpacity`
  flex-direction:row;
  justify-content:flex-start;
  align-items:center;
  width:90%;
`;