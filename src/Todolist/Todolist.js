import React from 'react';
import Addtask from '../Addtask/Addtask';
import Todo from '../Todo/Todo';
const Todolist = () => {
    const [todos,setTodos] = React.useState([]);
    const Addtodo = (todo) => {
        if(!todo.text){
            return;
        }
        const newtodo = [...todos,todo];
        setTodos(newtodo);
    }
    const remove = index => {
        const filterarr = [...todos];
        /*
        const filterarr = [...todos].filter(todo => todo.id !== id);
        */
        filterarr.splice(index,1);
        setTodos(filterarr);
    }
    const update = (index,newvalue) => {
        if(!newvalue){
            return;
        } 
        const updatelist = [...todos];
      updatelist[index].text = newvalue;
        setTodos(updatelist);
    }
    const isComplete = (index) => {
        const updatelist = [...todos];
        updatelist[index].isComplete = !updatelist[index].isComplete;
        /*
        updatelist.forEach(item => {
            if(item.id === id){
                item.isComplete = !item.isComplete; 
            }
        });
        */
        setTodos(updatelist);
    }
    return(
        <div className = "Todo-List">
            <Addtask Addtodo = {Addtodo}/>
            <br/>
            <br/>
            <Todo todos = {todos} remove = {remove} update = {update} isComplete = {isComplete}/>
        </div>
    );
}
export default Todolist;