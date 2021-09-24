export default function updateGame(
  row, 
  column, 
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
) {
  if (gameEnd) return;
  if (board[row][column].value === '') {
    const newBoard = [...board];
    newBoard[row][column].value = turn;
    newBoard[row][column].color = turn === 'close' ? 'green' : 'red';
    setBoard(newBoard);
    const newTurn = turn === 'close' ? 'circle-o' : 'close';
    setTurn(turn === 'close' ? 'circle-o' : 'close');
    const newPlayer = player === 'Player 1' ? 'Player 2' : 'Player 1';
    setPlayer(player === 'Player 1' ? 'Player 2' : 'Player 1');
    if (online) {
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
  }
  return false;
}