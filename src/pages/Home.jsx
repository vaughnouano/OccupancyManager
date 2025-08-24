import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home(){
    
    const [studentID, setStudentID] = useState("");
    const [studentPassword, setStudentPassword] = useState("");

    const navigate = useNavigate();

    // Temporary data
    const handleSubmit = () => {
        if (!studentID || !studentPassword) {
            alert("ID or Password is misisng");
        }

        if (studentID.length != 11) {
            alert("Invalid Student ID");
        }

        if (studentID !== "12-3456-789" || studentPassword !== "123456") {
            alert("ID or Password is incorrect");
            return;
        }

        navigate("/map")
    };

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