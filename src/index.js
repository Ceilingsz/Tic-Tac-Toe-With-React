import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles.css"
const root = ReactDOM.createRoot(document.getElementById("root"));

function Square(props) {
  return (
    <button className='Square' onClick={props.onTlick}>{props.value === 1 ? 'X' : 'O'}</button>
  )
}

function BoardRow(props) {
  const [Array, func] = React.useState([0,0,0]);
  console.log(Array);
  return (
    <div className='Board-Row'>
      <Square value = {Array[0]} onTlick = {() => {func([1, Array[1], Array[2]])}}/>
      <Square value = {Array[1]} onTlick = {() => {func([Array[0], 1, Array[2]])}}/>
      <Square value = {Array[2]} onTlick = {() => {func([Array[0], Array[1], 1])}}/>
    </div>
  )
}

function Board(){

  return (
  <div className='Board'>
    <BoardRow row = {1} />
    <BoardRow row = {4} />
    <BoardRow row = {7} />
  </div>
  )
}

root.render(<Board />);