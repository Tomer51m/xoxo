import React from "react";
import styles from "./Board.module.scss";
import Square from "../square/Square";

interface Props {
  squares: string[];
  handleSquareClick: (i: number) => void;
}

const Board: React.FC<Props> = ({ squares, handleSquareClick }) => {
  const { board } = styles;

  return (
    <div className={board}>
      {squares.map((square, i) => (
        <Square
          key={i}
          value={square}
          handleSquareClick={() => handleSquareClick(i)}
        />
      ))}
    </div>
  );
};

export default Board;