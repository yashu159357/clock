import React, { useEffect, useState } from "react";

const Clock = () => {
  const date = new Date();
  const [hour, setHour] = useState("hh");
  const [minute, setMinute] = useState("mm");
  const [second, setSecond] = useState("ss");
  const getTime = () => {
    setTimeout(() => {
      setHour(date.getHours());
      setMinute(date.getMinutes());
      setSecond(date.getSeconds());
    }, 1000);
  };
  useEffect(() => {
    getTime();
  });
  let styles = `
    .clock {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        pointer-events: none;
        user-select: none;
    }
    .clock_skeleton {
        border: 6px solid grey;
        border-radius: 50%;
        box-shadow: 0 0 20px -5px black;
    }
    .hour {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-100%) rotate(${hour * 30}deg);
        transform-origin: bottom;
        width: 5px;
        height: 55px;
        background: rgb(40,40,40);
        z-index: 4;
        transition: transform 0.3s;
    }
    .minute {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-100%) rotate(${minute * 6}deg);
        transform-origin: bottom;
        width: 3px;
        height: 80px;
        background: grey;
        z-index: 3;
        transition: transform 0.3s;
    }
    .second {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-100%) rotate(${second * 6}deg);
        transform-origin: bottom;
        width: 1.5px;
        height: 110px;
        background: red;
        z-index: 2;
    }
    p {
      position: absolute;
      left: 50%;
      transform: translate(-50%,0);
    }
`;
  return (
    <div className="clock">
      <style>{styles}</style>
      <img src={require("./clo.bmp")} alt="clock" className="clock_skeleton" />
      <div className="hour"></div>
      <div className="minute"></div>
      <div className="second"></div>
      <p>{`${hour} : ${minute} : ${(second <= 9 ? "0" : "") + second}`}</p>
    </div>
  );
};

export default Clock;
