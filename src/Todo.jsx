export default function Task({task, isDone}){
    if(isDone===true){
        return <li> Finished: {task}</li>
    }
    return <li> Work On: {task}</li>

}