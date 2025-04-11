import { useRef, useState } from 'react'
import circle from './assets/circle.svg'
import x from './assets/x.svg'
import './App.css'

let data = ["","","","","","","","",""]

function App() {
  const [count, setCount] = useState(0)
  const [lock, setLock] = useState(false)
  const titleRef = useRef(null)
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)
  const box5 = useRef(null)
  const box6 = useRef(null)
  const box7 = useRef(null)
  const box8 = useRef(null)
  const box9 = useRef(null)

  const box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9]

  const toggle = (e,num)=>{
    if(lock){
      return 0;
    }
    if(count%2===0){
      e.target.innerHTML = `<img src="${x}"/>`
      data[num]="X";
      setCount(count + 1);
    }
    else{
      e.target.innerHTML = `<img src="${circle}"/>`
      data[num]="O";
      setCount(count + 1);
    }
    checkWin()
  }

  const checkWin = () => {
    // Check rows
    if (data[0] !== "" && data[0] === data[1] && data[1] === data[2]) {
      won(data[0]);
    }
    if (data[3] !== "" && data[3] === data[4] && data[4] === data[5]) {
      won(data[3]);
    }
    if (data[6] !== "" && data[6] === data[7] && data[7] === data[8]) {
      won(data[6]);
    }
    
    // Check columns
    if (data[0] !== "" && data[0] === data[3] && data[3] === data[6]) {
      won(data[0]);
    }
    if (data[1] !== "" && data[1] === data[4] && data[4] === data[7]) {
      won(data[1]);
    }
    if (data[2] !== "" && data[2] === data[5] && data[5] === data[8]) {
      won(data[2]);
    }
    
    // Check diagonals
    if (data[0] !== "" && data[0] === data[4] && data[4] === data[8]) {
      won(data[0]);
    }
    if (data[2] !== "" && data[2] === data[4] && data[4] === data[6]) {
      won(data[2]);
    }
  };

  const won = (winner)=>{
    setLock(true)
    if(winner==="X")
    {
      titleRef.current.innerHTML = `Congratulations: <img src="${x}" /> Wins` 
    }
    else{
      titleRef.current.innerHTML = `Congratulations: <img src="${circle}" /> Wins` 
    }
  }

  const reset = ()=>{
    setLock(false);
    data = ["","","","","","","","",""];
    titleRef.current.innerHTML = `Tic Toe Game In <span>React</span>`
    box_array.map((e)=>{
      e.current.innerHTML = ""
    })
  }

  return (
    <>
   <div className="container">
    <div className="title" ref={titleRef}>Tic Toe Game In <span>React</span></div>
    <div className="board">
      <div className="row1">
        <div className="boxes" onClick={(e)=>{toggle(e,0)}} ref={box1}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,1)}} ref={box2}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,2)}} ref={box3}></div>
      </div>
      <div className="row2">
        <div className="boxes" onClick={(e)=>{toggle(e,3)}} ref={box4}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,4)}} ref={box5}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,5)}} ref={box6}></div>
      </div>
      <div className="row3">
        <div className="boxes" onClick={(e)=>{toggle(e,6)}} ref={box7}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,7)}} ref={box8}></div>
        <div className="boxes" onClick={(e)=>{toggle(e,8)}} ref={box9}></div>
      </div>
    </div>
    <button className="reset" onClick={()=>{reset()}}>Reset</button>
   </div>
    </>
  )
}

export default App
