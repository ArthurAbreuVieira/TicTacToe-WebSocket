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