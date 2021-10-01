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
  opponentConn,
  myConn
) {
  if (gameEnd) return;
  if (board[row][column].value === '') {
    const newBoard = [...board];
    newBoard[row][column].value = turn;
    newBoard[row][column].color = turn === 'close' ? '#88e439' : '#ff3049';
    setBoard(newBoard);
    const newTurn = turn === 'close' ? 'circle-o' : 'close';
    setTurn(turn === 'close' ? 'circle-o' : 'close');
    const newPlayer = player === 'Player 1' ? 'Player 2' : 'Player 1';
    setPlayer(player === 'Player 1' ? 'Player 2' : 'Player 1');
    if (online) {
      ws.emit("update_game", {
        from: myConn,
        to: opponentConn,
        data: {
          board: newBoard,
          player: newPlayer,
          turn: newTurn,
          room: room
        }
      });
    }
  }
  return false;
}