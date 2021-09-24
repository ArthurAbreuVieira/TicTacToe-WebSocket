<>

  <BoardContainer>
    <BackButtonContainer onPress={() => backScreen(navigation)}>
      <IconContainer style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <ImageIcon size="30px" source={require('../../assets/img/arrows.png')} />
        <Title size="20px" color="cyan">Sair</Title>
      </IconContainer>
    </BackButtonContainer>
    {singlePlayer && <>
      <WinnerModal visible={winner === "Player 1" ? true : false} back={() => backScreen(navigation)} />
      <LoserModal visible={winner === "Player 2" ? true : false} back={() => backScreen(navigation)} />
    </>}
    {!singlePlayer &&
      <LocalWinner visible={winner !== false ? true : false} back={() => backScreen(navigation)} winner={winner} />
    }

    {singlePlayer && <Title>{player === 'Player 1' ? 'Sua vez:' : 'Vez do adversário:'}</Title>}
    {!singlePlayer && <Title>Vez de: <FontAwesome name={player === 'Player 1' ? "close" : "circle-o"} size={35} color={player === "Player 1" ? "rgb(0,255,0)" : "rgb(255,0,0)"} /></Title>}
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
          if (player === "Player 2" && singlePlayer) {
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





    //ONLINE!!!!!!!!!!!!!


  <BoardContainer>
    <BackButtonContainer onPress={() => backScreen(navigation, ws)}>
      <IconContainer style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <ImageIcon size="30px" source={require('../../assets/img/arrows.png')} />
        <Title size="20px" color="cyan">Sair</Title>
      </IconContainer>
    </BackButtonContainer>

    <ClosedConn visible={!conn} back={() => backScreen(navigation, ws)} />
    <LookingModal visible={looking} back={() => backScreen(navigation, ws)} />
    <WinnerModal visible={winner === me ? true : false} back={() => backScreen(navigation, ws)} />
    {loser && <LoserModal visible={winner !== me ? true : false} back={() => backScreen(navigation, ws)} />}

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


</>