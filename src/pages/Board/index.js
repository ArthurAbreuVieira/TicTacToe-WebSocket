import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';

import disableBackButton from '../../util/disableBackButton';

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
import WinnerModal from '../../components/WinnerModal';


export default function ({ route }) {

  const { singlePlayer } = route.params;
  const [winner, setWinner] = useState(false);
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
  const starter = Math.ceil(Math.random()*2);
  const [player, setPlayer] = useState('Player '+starter);
  const [turn, setTurn] = useState(player === 'Player 1' ? 'close' : 'circle-o');
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

  function cpuMove() {
    const possible = [];
    board.map((row, index) => {
      row.map((column, i) => {
        if (column.value === '') {
          possible.push({ row: index, column: i });
        }
      });
    });
    let move = Math.round(Math.random() * possible.length);
    move = move >= possible.length ? move - 1 : move;
    if (possible.length !== 0)
      updateBoard(possible[move].row, possible[move].column, turn);
    else
      return;
  }

  useEffect(() => {
    disableBackButton();
  }, []);

  useEffect(() => {
    verifyWinner();
  }, [board]);

  useEffect(() => {
    if (!gameEnd && player === "Player 2" && singlePlayer) {
      setTimeout(() => cpuMove(board), 500);
    }
  }, [player]);

  function verifyWinner() {
    if (gameEnd) return;
    const row0 = board[0];
    const row1 = board[1];
    const row2 = board[2];

    // x
    if (row0[0].value === 'close' && row0[1].value === 'close' && row0[2].value === 'close') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][1].bg = 'yellowgreen';
          newBoard[0][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[0][2].bg = 'yellowgreen';
            newBoard[0][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 1"), 1200);
    } else if (row1[0].value === 'close' && row1[1].value === 'close' && row1[2].value === 'close') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[1][0].bg = 'yellowgreen';
        newBoard[1][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[1][2].bg = 'yellowgreen';
            newBoard[1][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 1"), 1200);
    } else if (row2[0].value === 'close' && row2[1].value === 'close' && row2[2].value === 'close') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[2][0].bg = 'yellowgreen';
        newBoard[2][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][1].bg = 'yellowgreen';
          newBoard[2][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 1"), 1200);
    } else if (row0[0].value === 'close' && row1[0].value === 'close' && row2[0].value === 'close') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][0].bg = 'yellowgreen';
          newBoard[1][0].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][0].bg = 'yellowgreen';
            newBoard[2][0].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 1"), 1200);
    } else if (row0[1].value === 'close' && row1[1].value === 'close' && row2[1].value === 'close') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][1].bg = 'yellowgreen';
        newBoard[0][1].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][1].bg = 'yellowgreen';
            newBoard[2][1].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 1"), 1200);
    } else if (row0[2].value === 'close' && row1[2].value === 'close' && row2[2].value === 'close') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][2].bg = 'yellowgreen';
        newBoard[0][2].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][2].bg = 'yellowgreen';
          newBoard[1][2].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 1"), 1200);
    } else if (row0[0].value === 'close' && row1[1].value === 'close' && row2[2].value === 'close') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][0].bg = 'yellowgreen';
        newBoard[0][0].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][2].bg = 'yellowgreen';
            newBoard[2][2].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 1"), 1200);
    } else if (row0[2].value === 'close' && row1[1].value === 'close' && row2[0].value === 'close') {
      setTimeout(() => {
        const newBoard = [...board];
        newBoard[0][2].bg = 'yellowgreen';
        newBoard[0][2].color = 'white';
        setBoard(newBoard);
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][1].bg = 'yellowgreen';
          newBoard[1][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][0].bg = 'yellowgreen';
            newBoard[2][0].color = 'white';
            setBoard(newBoard);
          }, 300);
        }, 300);
      }, 300);
      setGameEnd(true);
      setTimeout(() => setWinner("Player 1"), 1200);
    } else // o
      if (row0[0].value === 'circle-o' && row0[1].value === 'circle-o' && row0[2].value === 'circle-o') {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][0].bg = 'yellowgreen';
          newBoard[0][0].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[0][1].bg = 'yellowgreen';
            newBoard[0][1].color = 'white';
            setBoard(newBoard);
            setTimeout(() => {
              const newBoard = [...board];
              newBoard[0][2].bg = 'yellowgreen';
              newBoard[0][2].color = 'white';
              setBoard(newBoard);
            }, 300);
          }, 300);
        }, 300);
        setGameEnd(true);
        setTimeout(() => setWinner("Player 2"), 1200);
      } else if (row1[0].value === 'circle-o' && row1[1].value === 'circle-o' && row1[2].value === 'circle-o') {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[1][0].bg = 'yellowgreen';
          newBoard[1][0].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[1][1].bg = 'yellowgreen';
            newBoard[1][1].color = 'white';
            setBoard(newBoard);
            setTimeout(() => {
              const newBoard = [...board];
              newBoard[1][2].bg = 'yellowgreen';
              newBoard[1][2].color = 'white';
              setBoard(newBoard);
            }, 300);
          }, 300);
        }, 300);
        setGameEnd(true);
        setTimeout(() => setWinner("Player 2"), 1200);
      } else if (row2[0].value === 'circle-o' && row2[1].value === 'circle-o' && row2[2].value === 'circle-o') {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[2][0].bg = 'yellowgreen';
          newBoard[2][0].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[2][1].bg = 'yellowgreen';
            newBoard[2][1].color = 'white';
            setBoard(newBoard);
            setTimeout(() => {
              const newBoard = [...board];
              newBoard[2][2].bg = 'yellowgreen';
              newBoard[2][2].color = 'white';
              setBoard(newBoard);
            }, 300);
          }, 300);
        }, 300);
        setGameEnd(true);
        setTimeout(() => setWinner("Player 2"), 1200);
      } else if (row0[0].value === 'circle-o' && row1[0].value === 'circle-o' && row2[0].value === 'circle-o') {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][0].bg = 'yellowgreen';
          newBoard[0][0].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[1][0].bg = 'yellowgreen';
            newBoard[1][0].color = 'white';
            setBoard(newBoard);
            setTimeout(() => {
              const newBoard = [...board];
              newBoard[2][0].bg = 'yellowgreen';
              newBoard[2][0].color = 'white';
              setBoard(newBoard);
            }, 300);
          }, 300);
        }, 300);
        setGameEnd(true);
        setTimeout(() => setWinner("Player 2"), 1200);
      } else if (row0[1].value === 'circle-o' && row1[1].value === 'circle-o' && row2[1].value === 'circle-o') {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][1].bg = 'yellowgreen';
          newBoard[0][1].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[1][1].bg = 'yellowgreen';
            newBoard[1][1].color = 'white';
            setBoard(newBoard);
            setTimeout(() => {
              const newBoard = [...board];
              newBoard[2][1].bg = 'yellowgreen';
              newBoard[2][1].color = 'white';
              setBoard(newBoard);
            }, 300);
          }, 300);
        }, 300);
        setGameEnd(true);
        setTimeout(() => setWinner("Player 2"), 1200);
      } else if (row0[2].value === 'circle-o' && row1[2].value === 'circle-o' && row2[2].value === 'circle-o') {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][2].bg = 'yellowgreen';
          newBoard[0][2].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[1][2].bg = 'yellowgreen';
            newBoard[1][2].color = 'white';
            setBoard(newBoard);
            setTimeout(() => {
              const newBoard = [...board];
              newBoard[2][2].bg = 'yellowgreen';
              newBoard[2][2].color = 'white';
              setBoard(newBoard);
            }, 300);
          }, 300);
        }, 300);
        setGameEnd(true);
        setTimeout(() => setWinner("Player 2"), 1200);
      } else if (row0[0].value === 'circle-o' && row1[1].value === 'circle-o' && row2[2].value === 'circle-o') {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][0].bg = 'yellowgreen';
          newBoard[0][0].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[1][1].bg = 'yellowgreen';
            newBoard[1][1].color = 'white';
            setBoard(newBoard);
            setTimeout(() => {
              const newBoard = [...board];
              newBoard[2][2].bg = 'yellowgreen';
              newBoard[2][2].color = 'white';
              setBoard(newBoard);
            }, 300);
          }, 300);
        }, 300);
        setGameEnd(true);
        setTimeout(() => setWinner("Player 2"), 1200);
      } else if (row0[2].value === 'circle-o' && row1[1].value === 'circle-o' && row2[0].value === 'circle-o') {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[0][2].bg = 'yellowgreen';
          newBoard[0][2].color = 'white';
          setBoard(newBoard);
          setTimeout(() => {
            const newBoard = [...board];
            newBoard[1][1].bg = 'yellowgreen';
            newBoard[1][1].color = 'white';
            setBoard(newBoard);
            setTimeout(() => {
              const newBoard = [...board];
              newBoard[2][0].bg = 'yellowgreen';
              newBoard[2][0].color = 'white';
              setBoard(newBoard);
            }, 300);
          }, 300);
        }, 300);
        setGameEnd(true);
        setTimeout(() => setWinner("Player 2"), 1200);
      } else {
        let rowEmpty = 0;

        board.map(row => {
          row.map(r => rowEmpty += r.value === '' ? 1 : 0);
        });

        if (rowEmpty === 0) {
          board.map(row => {
            row.map(r => {
              r.bg = 'red';
              r.color = 'white';
              setGameEnd(true);
              setTimeout(() => setWinner("Player 2"), 1200);
            });
          });
        }
      }
  }

  return (
    <BoardContainer>
      <WinnerModal visible={winner === "Player 1" ? true : false}/>

      <Title>{player === 'Player 1' ? 'Sua vez:' : 'Vez do adversário:'}</Title>
      <PlayersContainer>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <Player>
            <FontAwesome name="close" size={turn === 'close' ? 100 : 70} color={turn === 'close' ? 'rgba(0,255,0,1)' : 'rgba(0,255,0,.3)'} />
          </Player>
          <Player>
            <FontAwesome name="circle-o" size={turn === 'circle-o' ? 100 : 70} color={turn === 'circle-o' ? 'rgba(255,0,0,1)' : 'rgba(255,0,0,.3)'} />
          </Player>
        </View>
      </PlayersContainer>

      <Board>

        <Row>
          <Square bg={board[0][0].bg} margin_right="10px" onPress={() => {
            if (player === "Player 2" && singlePlayer){
              return;
            }
            updateBoard(0, 0, turn);
          }}>
            <FontAwesome name={board[0][0].value} size={90} color={board[0][0].color} />
          </Square>
          <Square bg={board[0][1].bg} onPress={() => {
            if (player === "Player 2" && singlePlayer) return;
            updateBoard(0, 1, turn);
          }}>
            <FontAwesome name={board[0][1].value} size={90} color={board[0][1].color} />
          </Square>
          <Square bg={board[0][2].bg} margin_left="10px" onPress={() => {
            if (player === "Player 2" && singlePlayer) return;
            updateBoard(0, 2, turn);
          }}>
            <FontAwesome name={board[0][2].value} size={90} color={board[0][2].color} />
          </Square>
        </Row>

        <Row>
          <Square bg={board[1][0].bg} margin_right="10px" onPress={() => {
            if (player === "Player 2" && singlePlayer) return;
            updateBoard(1, 0, turn);
          }}>
            <FontAwesome name={board[1][0].value} size={90} color={board[1][0].color} />
          </Square>
          <Square bg={board[1][1].bg} onPress={() => {
            if (player === "Player 2" && singlePlayer) return;
            updateBoard(1, 1, turn);
          }}>
            <FontAwesome name={board[1][1].value} size={90} color={board[1][1].color} />
          </Square>
          <Square bg={board[1][2].bg} margin_left="10px" onPress={() => {
            if (player === "Player 2" && singlePlayer) return;
            updateBoard(1, 2, turn);
          }}>
            <FontAwesome name={board[1][2].value} size={90} color={board[1][2].color} />
          </Square>
        </Row>

        <Row>
          <Square bg={board[2][0].bg} margin_right="10px" onPress={() => {
            if (player === "Player 2" && singlePlayer) return;
            updateBoard(2, 0, turn);
          }}>
            <FontAwesome name={board[2][0].value} size={90} color={board[2][0].color} />
          </Square>
          <Square bg={board[2][1].bg} onPress={() => {
            if (player === "Player 2" && singlePlayer) return;
            updateBoard(2, 1, turn);
          }}>
            <FontAwesome name={board[2][1].value} size={90} color={board[2][1].color} />
          </Square>
          <Square bg={board[2][2].bg} margin_left="10px" onPress={() => {
            if (player === "Player 2" && singlePlayer) return;
            updateBoard(2, 2, turn);
          }}>
            <FontAwesome name={board[2][2].value} size={90} color={board[2][2].color} />
          </Square>
        </Row>

      </Board>

    </BoardContainer>
  );
}