import React, { useEffect, useState } from 'react';

import disableBackButton from '../../util/disableBackButton';
import verifyWinner from '../../util/verifyWinner';
import updateGame from '../../util/updateGame';
import cpuMove from '../../util/cpuMove';

import Board from '../../components/Board';

export default function ({ route, navigation }) {

  const { singlePlayer } = route.params;
  const starter = Math.ceil(Math.random() * 2);
  const [winner, setWinner] = useState(false);
  const [player, setPlayer] = useState('Player ' + starter);
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
  }, []);

  useEffect(() => {
    verifyWinner(
      gameEnd, 
      board, 
      setBoard, 
      setGameEnd, 
      setWinner,
      false,
      setDraw
    );
  }, [board]);

  useEffect(() => {
    if (!gameEnd && player === "Player 2" && singlePlayer) {
      setTimeout(() => 
        cpuMove(
          turn,
          player, 
          board, 
          setTurn, 
          setPlayer, 
          setBoard, 
          gameEnd
        ), 500
      );
    }
  }, [player]);

  return (
    <Board
      navigation={navigation}
      singlePlayer={singlePlayer}
      winner={winner}
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
  );
}