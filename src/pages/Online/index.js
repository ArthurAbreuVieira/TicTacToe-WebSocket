import React, { useEffect, useState } from 'react';
import { AppState } from 'react-native';

import disableBackButton from '../../util/disableBackButton';
import backScreen from '../../util/backScreen';
import verifyWinner from '../../util/verifyWinner';
import updateGame from '../../util/updateGame';
import WSConnect from '../../util/WSConnect';

import Board from '../../components/Board';
import LookingModal from '../../components/LookingModal';
import ClosedConn from '../../components/ClosedConn';

export default function ({ navigation }) {
  
  AppState.addEventListener("change", () => {
    backScreen('Lobby', navigation, {},  ws);
  });

  const [ws, setWs] = useState(undefined);
  const [me, setMe] = useState(undefined);
  const [myConn, setMyConn] = useState(undefined);
  const [room, setRoom] = useState(undefined);
  const [opponentConn, setOpponentConn] = useState(undefined);
  const [conn, setConn] = useState(true);
  const [looking, setLooking] = useState(true);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
  const [player, setPlayer] = useState('');
  const [turn, setTurn] = useState(player === 'Player 1' ? 'close' : 'circle-o');
  const [gameEnd, setGameEnd] = useState(false);
  const [draw, setDraw] = useState(false);
  const [board, setBoard] = useState([
    [
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .6)' },
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .6)' }
    ],
    [
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .6)' },
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .3)' }
    ],
    [
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .6)' },
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: '#88e439', value: '', bg: 'rgba(0, 0, 0, .6)' }
    ]
  ]);

  useEffect(() => {
    disableBackButton();
    WSConnect(
      setWs,
      setPlayer,
      setTurn,
      setLooking,
      setBoard,
      setConn,
      setMe,
      setOpponentConn,
      setRoom,
      setMyConn
    );
  }, []);

  useEffect(() => {
    verifyWinner(
      gameEnd,
      board,
      setBoard,
      setGameEnd,
      setWinner,
      setLoser,
      setDraw
    );
  }, [board]);
  
  return (
    <>
    <LookingModal 
      visible={looking}
      navigation={navigation}
      ws={ws}
      gameData={{
        room,
        opponentConn,
      }}
    />
    {!gameEnd &&
    <ClosedConn 
      visible={!conn} 
      navigation={navigation}
      ws={ws}  
      gameData={{
        room,
        opponentConn,
      }}
    />}
    <Board
      navigation={navigation}
      singlePlayer={false}
      online={true}
      ws={ws}
      room={room}
      me={me}
      myConn={myConn}
      opponentConn={opponentConn}
      winner={winner}
      loser={loser}
      player={player}
      setPlayer={setPlayer}
      turn={turn}
      setTurn={setTurn}
      board={board}
      setBoard={setBoard}
      updateGame={updateGame}
      gameEnd={gameEnd}
      setGameEnd={setGameEnd}
      draw={draw}
    />
    </>
  );
}