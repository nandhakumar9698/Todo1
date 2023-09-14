import React from 'react';
import './Addtask.css';
const Addtask = ({Addtodo}) => {
    const [input,setInput] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault();
        Addtodo({
            text : input,
            isComplete : false
        });
        setInput('');
    } 
    const handleChange = e => {
        setInput(e.target.value);
    }
    return(    
        <center>
        <div className = "Add-Task">
            <form onSubmit = {handleSubmit}>
                <input type="text" placeholder = "ADD Task e.g., Conference Meeting at 2:00 PM" onChange = {handleChange}value = {input}/>
                <input type="submit" value = "+" />
            </form>
        </div>
        </center>
    );
}
export default Addtask;