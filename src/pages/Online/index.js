import React, { useEffect, useState } from 'react';
import { View, Image, LogBox } from 'react-native';


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

let ws;
let me;              
export default function ({ route }) {
  let room;
  let opponentConn;
  let starter = 0;
  const [player, setPlayer] = useState('');
  const [turn, setTurn] = useState(player === 'Player 1' ? 'close' : 'circle-o');
  const [gameEnd, setGameEnd] = useState(false);
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
  
  useEffect(() => {
    verifyWinner();
  }, [board]);
  
  useEffect(() => {
  
  }, [player]);

  function WSConnect() {
    ws = new WebSocket("ws://192.168.100.56:8080");
    ws.onmessage = msg => {
      msg = JSON.parse(msg.data);
      if (msg.type === 'connected') {
        // alert(`1 - ${msg.conn1} | 2 - ${msg.conn2}`);
        starter = msg.turn;
        let initialPlayer = 'Player ' + starter;
        me = msg.me == msg.player1 ? "Player 1" : "Player 2";
        console.log(initialPlayer, me, initialPlayer == me);
        setPlayer(initialPlayer);
        setTurn('Player ' + starter === 'Player 1' ? 'close' : 'circle-o');
        setBoard(msg.board);
        console.log(msg.board);
        // opponentConn = msg.opponentConn;
      }
    }
  }

  function updateGame(row, column, value) {
    if (gameEnd) return;
    if (board[row][column].value === '') {
      const newBoard = [...board];
      newBoard[row][column].value = value;
      newBoard[row][column].color = turn === 'close' ? 'green' : 'red';
      setBoard(newBoard);
      const newTurn = turn === 'close' ? 'circle-o' : 'close';
      setTurn(turn === 'close' ? 'circle-o' : 'close');
      const newPlayer = player === 'Player 1' ? 'Player 2' : 'Player 1';
      setPlayer(player === 'Player 1' ? 'Player 2' : 'Player 1');
      ws.send(JSON.stringify({
        "type": "update_game",
        "data": JSON.stringify({
          "board": newBoard,
          "player": newPlayer,
          "turn": newTurn,
          "room": room,
          "to": opponentConn
        })
      }));
    }
    return false;
  }

  useEffect(() => {
    WSConnect();
  }, []);

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
            });
          });
        }
      }
  }

  return (
    <BoardContainer>

      <Title>Vez de: </Title>
      <FontAwesome name={player === 'Player 1' ? 'close' : 'circle-o'} size={80} color={turn === 'close' ? 'green' : 'red'} />
      <PlayersContainer>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <Player>
            <PlayerIcon borderColor={player === 'Player 1' ? "5px solid yellowgreen" : "5px solid rgb(110, 110, 110)"}>
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
          <Player>
            <PlayerIcon borderColor={player === 'Player 2' ? "5px solid orangered" : "5px solid rgb(110, 110, 110)"}>
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
          <Square bg={board[0][0].bg} margin_right="10px" onPress={() => {
            // if (player === me) updateGame(0, 0, turn);
            if (player == me) alert('0, 0');
            else console.log(player, me, player === me);
          }}>
            <FontAwesome name={board[0][0].value} size={90} color={board[0][0].color} />
          </Square>
          <Square bg={board[0][1].bg} onPress={() => {
            if (player === me) updateGame(0, 1, turn);
          }}>
            <FontAwesome name={board[0][1].value} size={90} color={board[0][1].color} />
          </Square>
          <Square bg={board[0][2].bg} margin_left="10px" onPress={() => {
            if (player === me) updateGame(0, 2, turn);
          }}>
            <FontAwesome name={board[0][2].value} size={90} color={board[0][2].color} />
          </Square>
        </Row>

        <Row>
          <Square bg={board[1][0].bg} margin_right="10px" onPress={() => {
            if (player === me) updateGame(1, 0, turn);
          }}>
            <FontAwesome name={board[1][0].value} size={90} color={board[1][0].color} />
          </Square>
          <Square bg={board[1][1].bg} onPress={() => {
            if (player === me) updateGame(1, 1, turn);
          }}>
            <FontAwesome name={board[1][1].value} size={90} color={board[1][1].color} />
          </Square>
          <Square bg={board[1][2].bg} margin_left="10px" onPress={() => {
            if (player === me) updateGame(1, 2, turn);
          }}>
            <FontAwesome name={board[1][2].value} size={90} color={board[1][2].color} />
          </Square>
        </Row>

        <Row>
          <Square bg={board[2][0].bg} margin_right="10px" onPress={() => {
            if (player === me) updateGame(2, 0, turn);
          }}>
            <FontAwesome name={board[2][0].value} size={90} color={board[2][0].color} />
          </Square>
          <Square bg={board[2][1].bg} onPress={() => {
            if (player === me) updateGame(2, 1, turn);
          }}>
            <FontAwesome name={board[2][1].value} size={90} color={board[2][1].color} />
          </Square>
          <Square bg={board[2][2].bg} margin_left="10px" onPress={() => {
            if (player === me) updateGame(2, 2, turn);
          }}>
            <FontAwesome name={board[2][2].value} size={90} color={board[2][2].color} />
          </Square>
        </Row>

      </Board>

    </BoardContainer>
  );
}