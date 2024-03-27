
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

// export default function Task({task, isDone}){
//     return (
//     <li>  {task} {isDone &&  ' : Finished'} </li>)

// }



// Conditional Rendering: using || operators

// export default function Task({task, isDone}){
//     return (
//     <li>  {task} {isDone ||  ' : Work on.'} </li>)

// }

// conditional rendering: using variables
export default function Task({task, isDone}){
    let listItem;
    if(isDone===true){
        listItem= <li> Finished: {task}</li>
    }
    else{
    listItem= <li> Work On: {task}</li>
    }

    return listItem;

}