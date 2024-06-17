import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState} from 'react'
import "./styles.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

function Empty(){
  return <div></div>
}

function Cross(){
  return <div>X</div>
} 

function Oh(){
  return <div>O</div>
}

function Display(props) {
  if(props.val === 0 || props.val === 3)
    return <Empty />
  if(props.val === 1)
    return <Cross />
  if(props.val === 2)
    return <Oh />

}


function Square(props) {

  function checkWinner() {
    let sign = props.currSign;
    sign[props.index] = (props.turn === 1 ? 1 : 2);
    const pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for(let i = 0 ; i < 8 ; i++){
      const [a, b, c] = pattern[i];
      if(sign[a] === sign[b] && sign[b] === sign[c] && sign[a] !== 0){
        props.changewin(sign[a])
        for(let i = 0 ; i < 9 ; i++)
          if(props.currSign[i] === 0)
          props.currSign[i] = 3;
        return;
      }
    }
  }

  
  function handleClick() { 
    if(props.turn === 1)
        props.turnVal(0)
    if(props.turn === 0)
        props.turnVal(1);

    props.changeSign(() => {
      const arr = props.currSign
      arr[props.index] = (props.turn === 1 ? 1 : 2);
      return arr;
    })
    console.log(props.currSign);
    checkWinner();
  }

  return (
    <button className='Square' onClick={handleClick} disabled={props.currSign[props.index] === 0 ? false : true}><Display val={props.currSign[props.index]}/></button>
  )
} 

function GiveWinner(props){
  console.log(props.winner)
  if(props.winner === 0)
    return;
  if(props.winner === 1)
    return <div>The winner is X!</div>
  else
    return <div>The winner is O!</div>
}

function Board(){
  const [sign, setSign] = useState([0,0,0,0,0,0,0,0,0])
  const [turn, setTurn] = useState(1);
  const [winner, updateWinner] = useState(0);
  

  

  return (
  <div className='Board'>
    <div className='Board-row'>
    <Square changewin = {updateWinner} currSign = {sign} index={0} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    <Square changewin = {updateWinner} currSign = {sign} index={1} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    <Square changewin = {updateWinner} currSign = {sign} index={2} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    </div>
    <div className='Board-row'>
    <Square changewin = {updateWinner} currSign = {sign} index={3} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    <Square changewin = {updateWinner} currSign = {sign} index={4} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    <Square changewin = {updateWinner} currSign = {sign} index={5} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    </div>
    <div className='Board-row'>
    <Square changewin = {updateWinner} currSign = {sign} index={6} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    <Square changewin = {updateWinner} currSign = {sign} index={7} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    <Square changewin = {updateWinner} currSign = {sign} index={8} turn = {turn} turnVal = {setTurn} changeSign={setSign}/>
    </div>
<GiveWinner winner={winner}/>
  </div>

)
}

root.render(<Board />);