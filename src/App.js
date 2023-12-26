import "./App.css";
import { useState } from "react";

function Square({value,updaterFunc}) {
  return <button className="square" onClick={updaterFunc}>{value}</button>;
}

export default function Board() {

  const [StateSq,FuncSq] = useState(Array(9).fill(null))
  const [xMove,setxMove] = useState(true)

  function onBtnClick(i){
    const NewStateSq = StateSq.slice()
    if (NewStateSq[i]!=null) return
    NewStateSq[i] = xMove===true?"X":"O"
    FuncSq(NewStateSq)
    console.log(NewStateSq)
    if (calculateWinner(NewStateSq)) console.log("Winner is",NewStateSq[i])
    setxMove(xMove===false?true:false)
  }

  function calculateWinner(StateSq) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (StateSq[a] && StateSq[a] === StateSq[b] && StateSq[a] === StateSq[c]) {
        return StateSq[a];
      }
    }
    return null;
  }

  return (
    <>
      <div className="board-row">
        <Square value={StateSq[0]} updaterFunc = {()=>onBtnClick(0)}/>
        <Square value={StateSq[1]} updaterFunc = {()=>onBtnClick(1)} />
        <Square value={StateSq[2]} updaterFunc = {()=>onBtnClick(2)} />
      </div>
      <div className="board-row">
        <Square value={StateSq[3]} updaterFunc = {()=>onBtnClick(3)} />
        <Square value= {StateSq[4]} updaterFunc = {()=>onBtnClick(4)} />
        <Square value={StateSq[5]} updaterFunc = {()=>onBtnClick(5)} />
      </div>
      <div className="board-row">
        <Square value={StateSq[6]} updaterFunc = {()=>onBtnClick(6)} />
        <Square value={StateSq[7]} updaterFunc = {()=>onBtnClick(7)} />
        <Square value={StateSq[8]} updaterFunc = {()=>onBtnClick(8)} />
      </div>
    </>
  );
}
