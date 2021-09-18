import React from 'react';
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

import { boardData } from '../../util/game/game';

export default function() {
  return (
    <BoardContainer>

      <Title>Vez do Jogador 1</Title>
      <PlayersContainer>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
          <Player size="110px">
            <PlayerIcon>
              <Image
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU" }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 55,
                }}
              />
            </PlayerIcon>
          </Player>
          <Player size="70px">
            <PlayerIcon>
              <Image
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSla-p7MqWVSLL2rpSQHlxEO6mKceKYPvZjo4oslefoeXE7-oMcRHP5IfT3qgllHC8kKvQ&usqp=CAU" }}
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
          <Square margin_right="10px" >
            <Value>{boardData.row[0][0]}</Value>
          </Square>
          <Square>
            <Value>{boardData.row[0][1]}</Value>
          </Square>
          <Square margin_left="10px" >
            <Value>{boardData.row[0][2]}</Value>
          </Square>
        </Row>
        
        <Row>
          <Square margin_right="10px" >
            <Value>{boardData.row[1][0]}</Value>
          </Square>
          <Square>
            <Value>{boardData.row[1][1]}</Value>
          </Square>
          <Square margin_left="10px" >
            <Value>{boardData.row[1][2]}</Value>
          </Square>
        </Row>
        
        <Row>
          <Square margin_right="10px" >
            <Value>{boardData.row[2][0]}</Value>
          </Square>
          <Square>
            <Value>{boardData.row[2][1]}</Value>
          </Square>
          <Square margin_left="10px" >
            <Value>{boardData.row[2][2]}</Value>
          </Square>
        </Row>

      </Board>

    </BoardContainer>
  );
}