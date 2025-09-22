import Todo from './Todo'
import './App.css'
import Actor from './Actor';
import Singer from './Singer';
import Library from './Library';
function App() {
  const time = 50;
  const actors=['Oamr Sunny','Bappa Raj'];
  const singers =[
    {id:1,name:'karim',age:35},
    {id:2,name:'tahsan',age:54}
  ]
  const books =[
    {id:1,name:'physics',price:350},
    {id:2,name:'chemistry',price:540}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <Library books={books}></Library>
      {
         singers.map(singer=><Singer key={singer.id} singer={singer}></Singer>)
      }
      {
        actors.map(actor=> <Actor key={actor} actor={actor}></Actor>)
      }
      {/* <Todo task="learn react" isDone={true} time={time}></Todo>
      <Todo task="learn js" isDone={false} time="100"></Todo>
      <p>I am Ohee</p>
      <Reuse></Reuse>
      <Player></Player>
      <Address></Address>
      <Developer name="rahin" tech="react"></Developer>
      <Sports name="mushi" runs="5000"></Sports> */}
    </>
  )
}
function Sports({name,runs}){
  return(
    <div className='address'>
      <h3>Name:{name}</h3>
      <h3>runs:{runs}</h3>
    </div>
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
