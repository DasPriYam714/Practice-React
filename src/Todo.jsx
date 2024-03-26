
// conditional rendering


// export default function Task({task, isDone}){
//     if(isDone===true){
//         return <li> Finished: {task}</li>
//     }
//     return <li> Work On: {task}</li>

// }


// Conditional Rendering: using ternary operators

// export default function Task({task, isDone}){
//     return (
//     <li> {isDone ?  'Finished' : 'Work on'} : {task}</li>)

// }


// Conditional Rendering: using && operators

export default function Task({task, isDone}){
    return (
    <li>  {task} {isDone &&  ' : Finished'} </li>)

}