import io from 'socket.io-client';

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
  setMyConn
) {
  const socket = io("http://18.228.10.49:7811", { reconnection: false }); //production
  // const socket = io("http://192.168.100.56:7811", { reconnection: false }); //development
  setWs(socket);
  socket.on('join', msg => {
    const opponent = msg.opponent;
    
    let starter = msg.turn;
    let initialPlayer = 'Player ' + starter;

    setPlayer(initialPlayer);
    setTurn(initialPlayer === 'Player 1' ? 'close' : 'circle-o');
    setMe(msg.firstReceiver === true ? "Player 1" : "Player 2");
    setOpponentConn(msg.sender);
    setRoom(msg.room);
    setConn(true);
    setBoard(msg.board);
    setMyConn(msg.opponent);
    setLooking(false);

    if(msg.firstReceiver) {
      msg.opponent = msg.sender;
      msg.sender = opponent;
      socket.emit("connect_second", {
        room: msg.room,
        player1: msg.player1,
        player2: msg.player2,
        sender: msg.sender,
        opponent: msg.opponent,
        turn: msg.turn,
        board: msg.board
      });
    }
  });

  socket.on("update_game", msg => {
    setBoard(msg.board);
    setPlayer(msg.player);
    setTurn(msg.turn);
  });

  socket.on("close_connection", () => {
    setConn(false);
  });



}