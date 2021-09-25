import React from 'react';
import { StyleSheet } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

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
  BackButtonContainer,
  Container
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

      {singlePlayer && <>
        <WinnerModal
          visible={winner === "Player 1" ? true : false}
          navigation={navigation}
        />
        <LoserModal
          visible={winner === "Player 2" ? true : false}
          navigation={navigation}
        />
      </>}

      {online && <>
        <WinnerModal
          visible={winner === me ? true : false}
          navigation={navigation}
          ws={ws}
        />
        {loser &&
          <LoserModal
            visible={winner !== me ? true : false}
            navigation={navigation}
            ws={ws}
          />
        }
      </>}

      {(!singlePlayer && !online) &&
        <LocalWinner
          visible={winner !== false ? true : false}
          navigation={navigation}
          winner={winner}
        />
      }

      <PlayersContainer>

        {!singlePlayer && online &&
          <Player>
            <Title size="20px"
              style={styles.playerIndicator}
            >
              VOCÊ: {<FontAwesome
              name={me === "Player 1" ? 'close' : 'circle-o'}
              size={20}
              color={me === "Player 1" ? "#88e439" : "#ff3049"}
            />}
            </Title>

            <Title size="20px"
              style={[styles.playerIndicator,{marginTop: 10}]}
            >
              ADVERSÁRIO: {
              <FontAwesome
                name={me !== "Player 1" ? 'close' : 'circle-o'}
                size={20}
                color={me !== "Player 1" ? "#88e439" : "#ff3049"}
              />}
            </Title>
          </Player>}

        <Container style={{marginTop: 10}}>
        {singlePlayer &&
          <Title size="30px">{player === 'Player 1' ? 'SUA VEZ:' : 'VEZ DO ADVERSÁRIO:'}</Title>}

        {online &&
          <Title size="30px">{player === me ? 'SUA VEZ:' : 'VEZ DO ADVERSÁRIO:'}</Title>}

        {(!singlePlayer && !online) &&
          <Title size="40px">VEZ DE:</Title>}

        <FontAwesome
          name={player === 'Player 1' ? "close" : "circle-o"}
          size={100}
          color={player === "Player 1" ? "#88e439" : "#ff3049"}
        />
        </Container>
      </PlayersContainer>

      <Board border={player === "Player 1" ? "#88e439" : "#ff3049"}>

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

      <BackButtonContainer>
        <Button 
          route="Lobby" 
          text="SAIR"
          navigation={navigation} 
          textColor='#fff'
          color="#0f0d21"
          border="#5634cb"
          width="150px"
          height="40px"
          ws={ws}
        />
      </BackButtonContainer>

    </BoardContainer>
  );
}

const styles = StyleSheet.create({
  playerIndicator: {
    justifyContent: "center",
    alignItems: 'center',
    borderWidth: .5,
    borderRadius: 50,
    borderStyle: "solid",
    borderColor: '#5634cb',
    backgroundColor: "#0f0d21",
    padding: 6,
    width: 200,
  }
});