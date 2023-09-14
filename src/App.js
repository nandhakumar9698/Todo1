import React from 'react';
import './App.css';
import Todolist from './Todolist/Todolist';
const TodoApp = () => {
    let dateObj = new Date();
    let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let day = days[dateObj.getDay()];
    const monthNames = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    let month = monthNames[dateObj.getMonth()];
    let date = dateObj.getDate();
    return(
        <div className = "Todo-App">
            <h1>Today <span>{day} {date} {month}</span></h1>
            <Todolist />
        </div>
    );
}
export default TodoApp;