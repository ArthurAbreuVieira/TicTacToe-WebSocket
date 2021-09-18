import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import {
  BoardContainer,
  PlayersContainer,
  Player,
  PlayerIcon,
  Board,
  Row,
  Square,
  Value,
  Title,

} from '../../assets/styles';

import { FontAwesome } from '@expo/vector-icons';

export default function () {
  const [board, setBoard] = useState([
    [
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' }
    ],
    [
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' }
    ],
    [
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' },
      { color: 'green', value: '', bg: 'rgba(0, 0, 0, .3)' }
    ]
  ]);
  const [player, setPlayer] = useState('Player 1');
  const [turn, setTurn] = useState('close');
  const [gameEnd, setGameEnd] = useState(false);

  function updateBoard(row, column, value) {
    if (gameEnd) return;
    if (board[row][column].value === '') {
      const newBoard = [...board];
      newBoard[row][column].value = value;
      newBoard[row][column].color = turn === 'close' ? 'green' : 'red';
      setBoard(newBoard);
      setTurn(turn === 'close' ? 'circle-o' : 'close');
      setPlayer(player === 'Player 1' ? 'Player 2' : 'Player 1');
    }
    return false;
  }

  useEffect(() => {
    verifyWinner();
  }, [board]);

  function verifyWinner() {
    if (gameEnd) return;
    const row0 = board[0];
    const row1 = board[1];
    const row2 = board[2];

    // x
    if (row0[0].value === 'close' && row0[1].value === 'close' && row0[2].value === 'close') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[0][1].bg = 'yellowgreen';
          newBoard[0][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[0][2].bg = 'yellowgreen';
            newBoard[0][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row1[0].value === 'close' && row1[1].value === 'close' && row1[2].value === 'close') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[1][0].bg = 'yellowgreen';
        newBoard[1][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[1][2].bg = 'yellowgreen';
            newBoard[1][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row2[0].value === 'close' && row2[1].value === 'close' && row2[2].value === 'close') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[2][0].bg = 'yellowgreen';
        newBoard[2][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[2][1].bg = 'yellowgreen';
          newBoard[2][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[0].value === 'close' && row1[0].value === 'close' && row2[0].value === 'close') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][0].bg = 'yellowgreen';
          newBoard[1][0].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][0].bg = 'yellowgreen';
            newBoard[2][0].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[1].value === 'close' && row1[1].value === 'close' && row2[1].value === 'close') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][1].bg = 'yellowgreen';
        newBoard[0][1].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][1].bg = 'yellowgreen';
            newBoard[2][1].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[2].value === 'close' && row1[2].value === 'close' && row2[2].value === 'close') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][2].bg = 'yellowgreen';
        newBoard[0][2].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][2].bg = 'yellowgreen';
          newBoard[1][2].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[0].value === 'close' && row1[1].value === 'close' && row2[2].value === 'close') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[2].value === 'close' && row1[1].value === 'close' && row2[0].value === 'close') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][2].bg = 'yellowgreen';
        newBoard[0][2].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][0].bg = 'yellowgreen';
            newBoard[2][0].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    // o
    if (row0[0].value === 'circle-o' && row0[1].value === 'circle-o' && row0[2].value === 'circle-o') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[0][1].bg = 'yellowgreen';
          newBoard[0][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[0][2].bg = 'yellowgreen';
            newBoard[0][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row1[0].value === 'circle-o' && row1[1].value === 'circle-o' && row1[2].value === 'circle-o') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[1][0].bg = 'yellowgreen';
        newBoard[1][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[1][2].bg = 'yellowgreen';
            newBoard[1][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row2[0].value === 'circle-o' && row2[1].value === 'circle-o' && row2[2].value === 'circle-o') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[2][0].bg = 'yellowgreen';
        newBoard[2][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[2][1].bg = 'yellowgreen';
          newBoard[2][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[0].value === 'circle-o' && row1[0].value === 'circle-o' && row2[0].value === 'circle-o') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][0].bg = 'yellowgreen';
          newBoard[1][0].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][0].bg = 'yellowgreen';
            newBoard[2][0].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[1].value === 'circle-o' && row1[1].value === 'circle-o' && row2[1].value === 'circle-o') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][1].bg = 'yellowgreen';
        newBoard[0][1].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][1].bg = 'yellowgreen';
            newBoard[2][1].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[2].value === 'circle-o' && row1[2].value === 'circle-o' && row2[2].value === 'circle-o') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][2].bg = 'yellowgreen';
        newBoard[0][2].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][2].bg = 'yellowgreen';
          newBoard[1][2].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[0].value === 'circle-o' && row1[1].value === 'circle-o' && row2[2].value === 'circle-o') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }

    if (row0[2].value === 'circle-o' && row1[1].value === 'circle-o' && row2[0].value === 'circle-o') {
      setTimeout(()=>{
        const newBoard = [...board];
        newBoard[0][2].bg = 'yellowgreen';
        newBoard[0][2].color = 'white';
        setBoard(newBoard);
        setTimeout(()=>{
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(()=>{
            const newBoard = [...board];
            newBoard[2][0].bg = 'yellowgreen';
            newBoard[2][0].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
    }
  }

  return (
    <BoardContainer>

      <Title>Vez do {player}</Title>
      <PlayersContainer>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <Player size={player === 'Player 1' ? "110px" : "70px"}>
            <PlayerIcon>
              <Image
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrvnqt4J7Y_VIX6d-AjUdviYgyWjOYF5msTsgDCEajLK3xz6k&s" }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 55,
                }}
              />
            </PlayerIcon>
          </Player>
          <Player size={player === 'Player 2' ? "110px" : "70px"}>
            <PlayerIcon>
              <Image
                source={{ uri: "https://images.megapixl.com/4707/47075236.jpg" }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 55,
                }}
              />
            </PlayerIcon>
          </Player>
        </View>
      </PlayersContainer>

      <Board>

        <Row>
          <Square bg={board[0][0].bg} margin_right="10px" onPress={() => updateBoard(0, 0, turn)}>
            <FontAwesome name={board[0][0].value} size={90} color={board[0][0].color} />
          </Square>
          <Square bg={board[0][1].bg} onPress={() => updateBoard(0, 1, turn)}>
            <FontAwesome name={board[0][1].value} size={90} color={board[0][1].color} />
          </Square>
          <Square bg={board[0][2].bg} margin_left="10px" onPress={() => updateBoard(0, 2, turn)}>
            <FontAwesome name={board[0][2].value} size={90} color={board[0][2].color} />
          </Square>
        </Row>

        <Row>
          <Square bg={board[1][0].bg} margin_right="10px" onPress={() => updateBoard(1, 0, turn)}>
            <FontAwesome name={board[1][0].value} size={90} color={board[1][0].color} />
          </Square>
          <Square bg={board[1][1].bg} onPress={() => updateBoard(1, 1, turn)}>
            <FontAwesome name={board[1][1].value} size={90} color={board[1][1].color} />
          </Square>
          <Square bg={board[1][2].bg} margin_left="10px" onPress={() => updateBoard(1, 2, turn)}>
            <FontAwesome name={board[1][2].value} size={90} color={board[1][2].color} />
          </Square>
        </Row>

        <Row>
          <Square bg={board[2][0].bg} margin_right="10px" onPress={() => updateBoard(2, 0, turn)}>
            <FontAwesome name={board[2][0].value} size={90} color={board[2][0].color} />
          </Square>
          <Square bg={board[2][1].bg} onPress={() => updateBoard(2, 1, turn)}>
            <FontAwesome name={board[2][1].value} size={90} color={board[2][1].color} />
          </Square>
          <Square bg={board[2][2].bg} margin_left="10px" onPress={() => updateBoard(2, 2, turn)}>
            <FontAwesome name={board[2][2].value} size={90} color={board[2][2].color} />
          </Square>
        </Row>

      </Board>

    </BoardContainer>
  );
}