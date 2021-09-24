export default function WSConnect(
  setWs,
  setPlayer, 
  setTurn, 
  setLooking, 
  setBoard, 
  setConn, 
  setMe, 
  setOpponentConn, 
  setRoom,
) {
  const WS = new WebSocket("ws://192.168.100.56:8080");
  WS.onmessage = msg => {
    msg = JSON.parse(msg.data);
    if (msg.type === 'connected') {
      setRoom(msg.room);
      let starter = msg.turn;
      let initialPlayer = 'Player ' + starter;
      setMe(msg.me == msg.player1 ? "Player 1" : "Player 2");
      setOpponentConn(msg.me == msg.player1 ? msg.player2 : msg.player1);
      setPlayer(initialPlayer);
      setTurn('Player ' + starter === 'Player 1' ? 'close' : 'circle-o');
      setLooking(false);
    } else if (msg.type === "update_game") {
      const game = JSON.parse(JSON.parse(msg.game));
      setBoard(game.board);
      setPlayer("Player " + game.turn);
      setTurn('Player ' + game.turn === 'Player 1' ? 'close' : 'circle-o');
    } else if (msg.type === "opponent_closed") {
      setConn(false);
    }
  }
  setWs(WS);
}