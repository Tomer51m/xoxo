import React from "react";
import styles from "./PlayerInput.module.scss";
import { Players } from "../game/Game";

interface Props {
  handlePlayersNames: (players: Players) => void
}

const PlayerInput: React.FC<Props> = ({ handlePlayersNames }) => {
  const { container } = styles;

  return (
    <div className={container}>
      <label>Enter Players Names:</label>
      <input type={"text"} />
    </div>
  );
};

export default PlayerInput;
