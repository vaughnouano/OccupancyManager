import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home(){
    
    const [studentID, setStudentID] = useState("");
    const [studentPassword, setStudentPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (studentID.length !== 11){
            alert("Invalid Student ID");
        } else {
            if (studentID && studentPassword) {
                if (studentPassword !== "123456" || studentID !== "12-3456-789"){
                    alert("id or password is incorrect");
                } else {
                    navigate("/map");
                }
            } else { 
                alert("ID or password is missing");
            }
        }
    }

    return (
        <>
            <div className="container">
                <div className="header">
                    <h1>Welcome to Cit-U</h1>
                    <h2>If you are student here</h2>
                </div>
            
                <div className="user-input">
                <div>
                    <label htmlFor="studID">Student ID: </label>
                    <input 
                        type="text"
                        name="studID"
                        id="studID"
                        value={studentID}
                        onChange={(e) => setStudentID(e.target.value)}
                        />
                </div>
                <div>
                    <label htmlFor="studID">Password: </label>
                    <input 
                        type="password"
                        name="studPass"
                        id="studPass"
                        value={studentPassword}
                        onChange={(e) => setStudentPassword(e.target.value)}
                        />
                </div>
            </div>

            
            <button onClick={handleSubmit}>Proceed</button>
            </div>
            
        </>
        
    )
}