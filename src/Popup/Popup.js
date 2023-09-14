import React from 'react';
import './Popup.css';
const Popup = ({edit,submit}) => {
    const [val,setVal] = React.useState(edit.text);
    const handleChange = e => {
        setVal(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        submit(val);
    }
    return(
        <div className = "outer">
            <center>
            <div className = "popup">
                <center>
                    <h1>Update the selected Task!</h1>
                    <form onSubmit = {handleSubmit}>
                        <input type="text" value = {val} onChange = {handleChange}/>
                        <input type="submit"value = "UPDATE"/>
                    </form>
                </center>
            </div>
            </center>
        </div>
    );
}
export default Popup;