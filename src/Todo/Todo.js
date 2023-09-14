import React from 'react';
import Popup from '../Popup/Popup';
import './Todo.css';
const Todo = ({todos,remove,update,isComplete}) => {
    const [edit,setEdit] = React.useState({
        index : null,
        text : ''
    });
    const arr = [1,2,3,4];
    const submit = value => {
        update(edit.index,value);
        setEdit({
            index : null,
            text : ''
        });       
    }
    const handleClick = index =>{
        isComplete(index);
    }
    const handleEvent = () => {
        return;
    }
    const todolist = todos.map((todo,index) => {
        return(
            <div key = {index}>
                <li key = {index}>
        
                            <span className = {todo.isComplete ? "cross" : "do"} key = {arr[1]++} onClick = {todo.isComplete ? () => remove(index) : () => handleEvent()}>{
                                todo.isComplete ? 'X' : '->'
                            }</span>
                    
                    <span key = {arr[0]++} className = {todo.isComplete ? 'completetask' : 'duetask'} onClick = {() => handleClick(index)} >{todo.text}</span>
                    <button className = "edit" key = {arr[2]++} onClick={() => setEdit({
                        index : index ,text : todo.text
                    })} disabled = {
                        todo.isComplete? true : false
                    }>EDIT &#10000;</button>
                     <hr key = {arr[3]++}/>
                </li>
            </div>
        )
    });
    return(
        <div>
        <center>
        <div className = "Todo">
            <ol className = "ol">
                {todolist}
            </ol>
        </div>
        </center>
        {
            edit.text ?(
                <Popup edit = {edit} submit = {submit}/>
            ):null
        }
        </div>
    );
}
export default Todo;