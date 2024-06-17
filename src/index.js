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
  if(props.val === 0)
    return <Empty />
  if(props.val === 1)
    return <Cross />
  if(props.val === 2)
    return <Oh />
}


function Square(props) {
  const [value, setValue ] = useState(0);
  function handleClick() { 
    if(props.value === 1)
    setValue(1);  
    else
    setValue(2)
    props.updateTurn(() => {
      if(props.value === 1)
        return 0;
      else
        return 1;
    })
  }

  return (
    <button className='Square' onClick = {handleClick} disabled={value === 0 ? false : true}><Display  val={value}/></button>
  )
} 

function BoardRow(props) {
  
  return (
    <div className='Board-Row'>
      <Square updateTurn = {props.updateTurn} value = {props.value}/>
      <Square updateTurn = {props.updateTurn} value = {props.value}/>
      <Square updateTurn = {props.updateTurn} value = {props.value}/>
    </div>
  )
}

function Board(){
  const [turn, setTurn] = useState(1);
  return (
  <div className='Board'>
    <BoardRow updateTurn = {setTurn} value = {turn}/>
    <BoardRow updateTurn = {setTurn} value = {turn}/>
    <BoardRow updateTurn = {setTurn} value = {turn}/>
  </div>
  )
}

root.render(<Board />);