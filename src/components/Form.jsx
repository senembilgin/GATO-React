import React, {useState} from "react";


function Form(){
    const[name, setName] = useState("");
    const[email,setEmail] = useState("");
    const[date, setDate] = useState("");
    const[password, setPassword] = useState("");
    const[rpassword, setRpassword] = useState("");


    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handleDateChange(event){
        setDate(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    function handleRpasswordChange(event){
        setRpassword(event.target.value);
    }

    return (
        <div>
            <h2>Pre-apply for an Account</h2>
            <form>
                <label>
                    Username:
                <input
                    onChange = {handleNameChange}
                    type = "text"
                    value = {name}
                    maxLength = {20}
                    required = "true"
                />
                </label>
                <br></br>
                <label>
                E-mail:
                <input  
                    onChange = {handleEmailChange}
                    type = "email"
                    value={email}
                    required = "true"
                />
                </label>
                <br></br>
                <label>
                Date of Birth:
                <input  
                    onChange = {handleDateChange}
                    type = "date"
                    value={date}
                    required = "true"
                    />
                </label>
                <br></br>
                <label>
                Password:
                <input  
                    onChange = {handlePasswordChange}
                    type = "password"
                    value={password}
                    minLength = "8"
                />
                </label>
                <br></br>
                <label>
                Repeat Password:
                <input  
                    onChange = {handleRpasswordChange}
                    type = "password"
                    value={rpassword}
                    minLength = "8"
                />
                </label>
                <br></br>
                <input  
                    type = "submit" 
                    value="Submit"                 
                />
            </form>
        </div>
    );
}

export default Form;

