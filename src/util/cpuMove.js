import updateGame from "./updateGame";

export default function cpuMove(
  turn, 
  player, 
  board, 
  setTurn, 
  setPlayer, 
  setBoard, 
  gameEnd
) {
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
    updateGame(
      possible[move].row, 
      possible[move].column, 
      turn, 
      player, 
      board, 
      setTurn, 
      setPlayer, 
      setBoard, 
      gameEnd, 
      false
    );
  else
    return false;
}