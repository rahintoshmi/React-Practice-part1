
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <p>I am Ohee</p>
      <Reuse></Reuse>
      <Player></Player>
      <Address></Address>
      <Developer name="rahin" tech="react"></Developer>
    </>
  )
}
function Reuse(){
  return (
    <h3>I am rahin toshmi ohee</h3>
  )
}
function Developer(props){
  return(
    <div style={{ 
      color: "blue"
     }}>
      <h4>Developer:{props.name}</h4>
      <h4>
        Technology: {props.tech}
      </h4>
    </div>
  )
}
function Player(){
  const age=21;
  const name = 'ohee';
  const playerStyle = {
    color: "yellow"
  }
  return(
    <p style={playerStyle}>I am : {name} , my age : {age}</p>

  )
}
function Address(){
  return(
    <div className='address'>
      <p>
        Name :
      </p>
      <p>
        Depart:
      </p>
    </div>
  )
}
export default App
