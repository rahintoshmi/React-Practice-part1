
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <p>I am Ohee</p>
      <Reuse></Reuse>
      <Player></Player>
      
    </>
  )
}
function Reuse(){
  return (
    <h3>I am rahin toshmi ohee</h3>
  )
}
function Player(){
  const age=21;
  const name = 'ohee';
  return(
    <p>I am : {name} , my age : {age}</p>

  )
}

export default App
