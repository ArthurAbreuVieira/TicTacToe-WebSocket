import React from 'react';
import { View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import backScreen from '../util/backScreen';

import WinnerModal from './WinnerModal';
import LoserModal from './LoserModal';
import LocalWinner from './LocalWinner';

import {
  BoardContainer,
  PlayersContainer,
  Player,
  Board,
  Row,
  Square,
  Title,
  IconContainer,
  ImageIcon,
  BackButtonContainer
} from '../assets/styles';

export default function ({
  navigation,
  singlePlayer = false,
  online = false,
  ws,
  room,
  me,
  opponentConn,
  winner = false,
  loser = false,
  player,
  setPlayer,
  turn,
  setTurn,
  board,
  setBoard,
  updateGame,
  gameEnd
}) {
  function handleUpdater(row, column) {
    updateGame(
      row, column,
      turn,
      player,
      board,
      setTurn,
      setPlayer,
      setBoard,
      gameEnd,
      online,
      ws,
      room,
      opponentConn
    );
  }

  function canPlay(player) {
    if (player === "Player 2" && singlePlayer) return false;
    if (online && player !== me) return false;

    return true;
  }

  return (
    <BoardContainer>
      <BackButtonContainer onPress={() => backScreen(navigation, ws)}>
        <IconContainer 
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <ImageIcon 
            size="30px" 
            source={require('../assets/img/arrows.png')}
          />
          <Title size="20px" color="cyan">Sair</Title>
        </IconContainer>
      </BackButtonContainer>

      {singlePlayer && <>
        <WinnerModal 
          visible={winner === "Player 1" ? true : false} 
          back={() => backScreen(navigation)}
        />
        <LoserModal 
          visible={winner === "Player 2" ? true : false}
          back={() => backScreen(navigation)}
        />
      </>}

      {online && <>
        <WinnerModal 
          visible={winner === me ? true : false} 
          back={() => backScreen(navigation, ws)} 
        />
        {loser && 
          <LoserModal 
            visible={winner !== me ? true : false} 
            back={() => backScreen(navigation, ws)} 
          />
        }
      </>}

      {(!singlePlayer && !online) &&
        <LocalWinner 
          visible={winner !== false ? true : false} 
          back={() => backScreen(navigation)} 
          winner={winner} 
        />
      }

      {singlePlayer &&
        <Title>{player === 'Player 1' ? 'Sua vez:' : 'Vez do adversário:'}</Title>
      }

      {online &&
        <Title>{player === me ? 'Sua vez:' : 'Vez do adversário:'}</Title>
      }

      {(!singlePlayer && !online) &&
        <Title>Vez de:
          <FontAwesome
            name={player === 'Player 1' ? "close" : "circle-o"}
            size={35}
            color={player === "Player 1" ? "rgb(0,255,0)" : "rgb(255,0,0)"}
          />
        </Title>
      }

      <PlayersContainer>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <Player>
            <FontAwesome
              name="close"
              size={turn === 'close' ? 100 : 70}
              color={turn === 'close' ? 'rgba(0,255,0,1)' : 'rgba(0,255,0,.3)'}
            />
          </Player>
          <Player>
            <FontAwesome
              name="circle-o"
              size={turn === 'circle-o' ? 100 : 70}
              color={turn === 'circle-o' ? 'rgba(255,0,0,1)' : 'rgba(255,0,0,.3)'}
            />
          </Player>
        </View>
      </PlayersContainer>

      <Board>

        <Row>
          <Square
            bg={board[0][0].bg}
            margin_right="10px"
            onPress={() => {
              canPlay(player) ? handleUpdater(0, 0) : false;
            }}
          >
            <FontAwesome name={board[0][0].value} size={90} color={board[0][0].color} />
          </Square>
          <Square
            bg={board[0][1].bg}
            onPress={() => {
              canPlay(player) ? handleUpdater(0, 1) : false;
            }}
          >
            <FontAwesome name={board[0][1].value} size={90} color={board[0][1].color} />
          </Square>
          <Square
            bg={board[0][2].bg}
            margin_left="10px"
            onPress={() => {
              canPlay(player) ? handleUpdater(0, 2) : false;
            }}
          >
            <FontAwesome name={board[0][2].value} size={90} color={board[0][2].color} />
          </Square>
        </Row>

        <Row>
          <Square
            bg={board[1][0].bg} margin_right="10px" onPress={() => {
              canPlay(player) ? handleUpdater(1, 0) : false;
            }}
          >
            <FontAwesome name={board[1][0].value} size={90} color={board[1][0].color} />
          </Square>
          <Square
            bg={board[1][1].bg}
            onPress={() => {
              canPlay(player) ? handleUpdater(1, 1) : false;
            }}
          >
            <FontAwesome name={board[1][1].value} size={90} color={board[1][1].color} />
          </Square>
          <Square
            bg={board[1][2].bg}
            margin_left="10px"
            onPress={() => {
              canPlay(player) ? handleUpdater(1, 2) : false;
            }}
          >
            <FontAwesome name={board[1][2].value} size={90} color={board[1][2].color} />
          </Square>
        </Row>

        <Row>
          <Square
            bg={board[2][0].bg} margin_right="10px" onPress={() => {
              canPlay(player) ? handleUpdater(2, 0) : false;
            }}
          >
            <FontAwesome name={board[2][0].value} size={90} color={board[2][0].color} />
          </Square>
          <Square
            bg={board[2][1].bg} onPress={() => {
              canPlay(player) ? handleUpdater(2, 1) : false;
            }}
          >
            <FontAwesome name={board[2][1].value} size={90} color={board[2][1].color} />
          </Square>
          <Square
            bg={board[2][2].bg}
            margin_left="10px"
            onPress={() => {
              canPlay(player) ? handleUpdater(2, 2) : false;
            }}
          >
            <FontAwesome name={board[2][2].value} size={90} color={board[2][2].color} />
          </Square>
        </Row>

      </Board>

    </BoardContainer>
  );
}

//novo design

import React from 'react';
import { View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import backScreen from '../util/backScreen';

import WinnerModal from './WinnerModal';
import LoserModal from './LoserModal';
import LocalWinner from './LocalWinner';
import Button from './Button';

import {
  BoardContainer,
  PlayersContainer,
  Player,
  Board,
  Row,
  Square,
  Title,
  IconContainer,
  ImageIcon,
  BackButtonContainer,
  Container
} from '../assets/styles';
import { useEffect } from 'react';

export default function ({
  navigation,
  singlePlayer = false,
  online = false,
  ws,
  room,
  me,
  opponentConn,
  winner = false,
  loser = false,
  player,
  setPlayer,
  turn,
  setTurn,
  board,
  setBoard,
  updateGame,
  gameEnd
}) {
  function handleUpdater(row, column) {
    updateGame(
      row, column,
      turn,
      player,
      board,
      setTurn,
      setPlayer,
      setBoard,
      gameEnd,
      online,
      ws,
      room,
      opponentConn
    );
  }

  function canPlay(player) {
    if (player === "Player 2" && singlePlayer) return false;
    if (online && player !== me) return false;

    return true;
  }

  return (
    <BoardContainer>
      {/* <BackButtonContainer onPress={() => backScreen(navigation, ws)}>
        <IconContainer
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <ImageIcon
            size="30px"
            source={require('../assets/img/arrows.png')}
          />
          <Title size="20px"x" color="cyan">Sair</Title>
        </IconContainer>
      </BackButtonContainer> */}

      {singlePlayer && <>
        <WinnerModal
          visible={winner === "Player 1" ? true : false}
          back={() => backScreen(navigation)}
        />
        <LoserModal
          visible={winner === "Player 2" ? true : false}
          back={() => backScreen(navigation)}
        />
      </>}

      {online && <>
        <WinnerModal
          visible={winner === me ? true : false}
          back={() => backScreen(navigation, ws)}
        />
        {loser &&
          <LoserModal
            visible={winner !== me ? true : false}
            back={() => backScreen(navigation, ws)}
          />
        }
      </>}

      {(!singlePlayer && !online) &&
        <LocalWinner
          visible={winner !== false ? true : false}
          back={() => backScreen(navigation)}
          winner={winner}
        />
      }

      <PlayersContainer>

        {!singlePlayer && online &&
          <Player>
            <Title size="20px">
              VOCÊ: {<FontAwesome
              name={me === "Player 1" ? 'close' : 'circle-o'}
              size={20}
              color={me === "Player 1" ? "rgb(0,255,0)" : "rgb(255,0,0)"}
            />}
            </Title>

            <Title size="20px">
              ADVERSÁRIO: {<FontAwesome
              name={me !== "Player 1" ? 'close' : 'circle-o'}
              size={20}
              color={me !== "Player 1" ? "rgb(0,255,0)" : "rgb(255,0,0)"}
            />}
            </Title>
          </Player>}

        <Container>
        {singlePlayer &&
          <Title size="30px">{player === 'Player 1' ? 'SUA VEZ:' : 'VEZ DO ADVERSÁRIO:'}</Title>}

        {online &&
          <Title size="30px">{player === me ? 'SUA VEZ:' : 'VEZ DO ADVERSÁRIO:'}</Title>}

        {(!singlePlayer && !online) &&
          <Title size="40px">VEZ DE:</Title>}

        <FontAwesome
          name={player === 'Player 1' ? "close" : "circle-o"}
          size={100}
          color={player === "Player 1" ? "rgb(0,255,0)" : "rgb(255,0,0)"}
        />
        </Container>
      </PlayersContainer>

      <Board>

        <Row>
          <Square
            bg={board[0][0].bg}
            margin_right="10px"
            onPress={() => {
              canPlay(player) ? handleUpdater(0, 0) : false;
            }}
          >
            <FontAwesome name={board[0][0].value} size={90} color={board[0][0].color} />
          </Square>
          <Square
            bg={board[0][1].bg}
            onPress={() => {
              canPlay(player) ? handleUpdater(0, 1) : false;
            }}
          >
            <FontAwesome name={board[0][1].value} size={90} color={board[0][1].color} />
          </Square>
          <Square
            bg={board[0][2].bg}
            margin_left="10px"
            onPress={() => {
              canPlay(player) ? handleUpdater(0, 2) : false;
            }}
          >
            <FontAwesome name={board[0][2].value} size={90} color={board[0][2].color} />
          </Square>
        </Row>

        <Row>
          <Square
            bg={board[1][0].bg} margin_right="10px" onPress={() => {
              canPlay(player) ? handleUpdater(1, 0) : false;
            }}
          >
            <FontAwesome name={board[1][0].value} size={90} color={board[1][0].color} />
          </Square>
          <Square
            bg={board[1][1].bg}
            onPress={() => {
              canPlay(player) ? handleUpdater(1, 1) : false;
            }}
          >
            <FontAwesome name={board[1][1].value} size={90} color={board[1][1].color} />
          </Square>
          <Square
            bg={board[1][2].bg}
            margin_left="10px"
            onPress={() => {
              canPlay(player) ? handleUpdater(1, 2) : false;
            }}
          >
            <FontAwesome name={board[1][2].value} size={90} color={board[1][2].color} />
          </Square>
        </Row>

        <Row>
          <Square
            bg={board[2][0].bg} margin_right="10px" onPress={() => {
              canPlay(player) ? handleUpdater(2, 0) : false;
            }}
          >
            <FontAwesome name={board[2][0].value} size={90} color={board[2][0].color} />
          </Square>
          <Square
            bg={board[2][1].bg} onPress={() => {
              canPlay(player) ? handleUpdater(2, 1) : false;
            }}
          >
            <FontAwesome name={board[2][1].value} size={90} color={board[2][1].color} />
          </Square>
          <Square
            bg={board[2][2].bg}
            margin_left="10px"
            onPress={() => {
              canPlay(player) ? handleUpdater(2, 2) : false;
            }}
          >
            <FontAwesome name={board[2][2].value} size={90} color={board[2][2].color} />
          </Square>
        </Row>

      </Board>

      <BackButtonContainer onPress={() => backScreen(navigation, ws)}>
        <Button 
          route="Lobby" 
          text="SAIR"
          navigation={navigation} 
          textColor='#fff'
          color="#303030"
          border="#0091ff"
          width="160px"
        />
      </BackButtonContainer>

    </BoardContainer>
  );
}

//saved styles
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
  width: ${({ width }) => width};
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
  background-color: #303030;
  justify-content: space-between;
  align-items: center;
`;

export const PlayersContainer = styled.View`
  width: 100%;
`;

export const Player = styled.View`
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  margin-top: 10px;
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
  width: 301px;
  height: 301px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.border};;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Square = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  background-color: ${({ bg }) => bg || "rgba(0, 0, 0, .3)"};
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
  justify-content:flex-end;
  align-items:center;
  width:90%;
`;