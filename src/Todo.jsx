// export default function Todo({task,isDone ,time=0}){
//     if(isDone === true){
//         return <li>Compelte: {task} time:{time}</li>
//     }
//     else{
//         return <li>Do now: {task} {time}</li>
//     }
// }
//conditional rednering
// export default function Todo({task,isDone,time=0}){
//     return isDone ? <li>Done:{task} time: {time}</li> : <li>pending:{task} {time}</li>
// }
//conditional rendering &&->yes
// export default function Todo({task,isDone,time=0}){
//     return isDone && <li>Done:{task} time: {time}</li> 
// }
//conditional rendering ||->no
// export default function Todo({task,isDone,time=0}){
//     return isDone || <li>Not Done:{task} time: {time}</li> 
// }
export default function Todo({task,isDone ,time=0}){
    const displayTime = time ? time:100;
    let listItem;
    if(isDone === true){         
        listItem = <li>Compelte: {task} {time ? "I am done " : "not done yet"}</li>
     }
     else{
        listItem=  <li>Do now: {task} {displayTime}</li>
     }
     return listItem;
 }