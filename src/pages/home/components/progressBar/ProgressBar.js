import React from "react";
import Progress from "@ramonak/react-progress-bar";
import "./ProgressBar.css";
import useSound from "use-sound";
import loud_btn from "../sounds/buttonClick.mp3";
const ProgressBar = () => {
  const [play] = useSound(loud_btn);
  return (
    <div className="progress-bar">
      <Progress
        className="progress-bar-inner"
        completed={60}
        bgColor="#85d1b5"
      />
      <div class="container-showTag">
        <span>120</span> / 450
      </div>
    </div>
  );
};

export default ProgressBar;
