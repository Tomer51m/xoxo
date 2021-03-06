import React from "react";
import "./square.scss";

interface Props {
  value: string;
  handleSquareClick: () => void;
}

const Square: React.FC<Props> = ({ value, handleSquareClick }) => {
  return (
    <button className="square" onClick={handleSquareClick}>
      {value}
    </button>
  );
};
export default Square;
