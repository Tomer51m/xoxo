import React, { useState, useEffect } from 'react';
import './game.scss';
import '../board/Board';
import Board from '../board/Board';
import PlayerInput from "../PlayerInput/PlayerInput";
import calculateWinner from "../HelperFunctions/CalculateWinner"

export interface Players {
  playerOne: string,
  playerTwo: string
}

const Game: React.FC = () => {
  const [ boardArray, setBoardArray ] = useState<string[]>(Array(9).fill(null));
  const [ nextPlayer, setNextPlayer ] = useState('X');
  const [ winner, setWinner ] = useState("");
  const [ playersNames, setPlayersNames ] = useState<null | Players>({playerOne: "string", playerTwo: "string"});

  useEffect(() => {
    calculateWinner(setWinner, boardArray)
    }, [boardArray])

  const handlePlayersNames = (players: Players): void => {
    setPlayersNames(players)
  }

  const handleSquareClick = (squareIndex: number): void => {
    if (winner || boardArray[squareIndex]) return;

    setBoardArray(state => state.map( (square, i) => {
      return (i === squareIndex) ? nextPlayer : square;
    }));

    setNextPlayer( nextPlayer === 'X' ? 'O' : 'X');
  }

    const restartGame = () => {
      setBoardArray(Array(9).fill(null));
      setWinner("");
      setNextPlayer('X');
    }

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>

      {
        playersNames ?
          <Board
          squares={boardArray}
          handleSquareClick={handleSquareClick}
          />
          :
          <PlayerInput handlePlayersNames={handlePlayersNames} />
      }

      
      { 
        winner ? <p>Winner: {winner}</p> : <p>Next player: {nextPlayer}</p>
      }

      <button onClick={restartGame}>Restart</button>
    </div>
  );
}

export default Game;
