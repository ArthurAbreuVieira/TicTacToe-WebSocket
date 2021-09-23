import React, { useEffect, useState } from 'react';
import { View, Image, AppState } from 'react-native';

import disableBackButton from '../../util/disableBackButton';
import backScreen from '../../util/backScreen';

import LookingModal from '../../components/LookingModal';
import WinnerModal from '../../components/WinnerModal';
import LoserModal from '../../components/LoserModal';
import ClosedConn from '../../components/ClosedConn';

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
  IconContainer,
  ImageIcon,
  BackButtonContainer

} from '../../assets/styles';

import { FontAwesome } from '@expo/vector-icons';


let ws;
let me;              
let room;
let opponentConn;
export default function ({ route, navigation }) {
  AppState.addEventListener("change", () => {
    if(AppState.currentState === "background") ws.close();
    else if(AppState.currentState === "active" && room === undefined) WSConnect();
    else navigation.navigate("Lobby");
  });
  let starter = 0;
  const [conn, setConn] = useState(true);
  const [looking, setLooking] = useState(true);
  const [winner, setWinner] = useState(false);
  const [loser, setLoser] = useState(false);
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
        room = msg.room;;
        starter = msg.turn;
        let initialPlayer = 'Player ' + starter;
        me = msg.me == msg.player1 ? "Player 1" : "Player 2";
        opponentConn = msg.me == msg.player1 ? msg.player2 : msg.player1;
        setPlayer(initialPlayer);
        setTurn('Player ' + starter === 'Player 1' ? 'close' : 'circle-o');
        setLooking(false);
      } else if(msg.type === "update_game") {
        const game = JSON.parse(JSON.parse(msg.game));
        setBoard(game.board);
        setPlayer("Player "+game.turn);
        setTurn('Player ' + game.turn === 'Player 1' ? 'close' : 'circle-o');
      } else if(msg.type === "opponent_closed") {
        setConn(false);
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
    disableBackButton();
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
      setTimeout(() => setWinner("Player 1"), 1200);
      setTimeout(() => setLoser(true), 1200);
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
      setTimeout(() => setLoser(true), 1200);
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
      setTimeout(() => setLoser(true), 1200);
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
      setTimeout(() => setLoser(true), 1200);
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
      setTimeout(() => setLoser(true), 1200);
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
      setTimeout(() => setLoser(true), 1200);
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
      setTimeout(() => setLoser(true), 1200);
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
      setTimeout(() => setLoser(true), 1200);
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
        setTimeout(() => setLoser(true), 1200);
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
        setTimeout(() => setLoser(true), 1200);
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
        setTimeout(() => setLoser(true), 1200);
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
        setTimeout(() => setLoser(true), 1200);
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
        setTimeout(() => setLoser(true), 1200);
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
        setTimeout(() => setLoser(true), 1200);
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
        setTimeout(() => setLoser(true), 1200);
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
        setTimeout(() => setLoser(true), 1200);
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
              setTimeout(() => setLoser(true), 1200);
            });
          });
        }
      }
  }

  return (
    <BoardContainer>
      <BackButtonContainer onPress={() => backScreen(navigation, ws)}>
        <IconContainer style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
          <ImageIcon size="30px" source={require('../../assets/img/arrows.png')}/>
          <Title size="20px" color="cyan">Sair</Title>
        </IconContainer>
      </BackButtonContainer>

      <ClosedConn visible={!conn} back={() => backScreen(navigation,ws)} />
      <LookingModal visible={looking} back={() => backScreen(navigation,ws)} />
      <WinnerModal visible={winner === me ? true : false} back={() => backScreen(navigation,ws)}/>
      { loser && <LoserModal visible={winner !== me ? true : false} back={() => backScreen(navigation,ws)}/> }

      <Title>{player === me ? 'Sua vez:' : 'Vez do adversário:'}</Title>
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
            if (player === me) updateGame(0, 0, turn);
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