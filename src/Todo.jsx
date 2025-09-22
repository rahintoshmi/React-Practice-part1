export default function Todo({task,isDone ,time=0}){
    if(isDone === true){
        return <li>Compelte: {task} time:{time}</li>
    }
    else{
        return <li>Do now: {task} {time}</li>
    }
}