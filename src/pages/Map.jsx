import { Link } from "react-router-dom"
import GymnasiumMap from "../maps/gymnasiumMap"

import styles from "../styles/map.module.css"

export default function Map(){
    
    return (
        <>
            <div className={styles.container}>
                <h1>This is the  map</h1>
                <Link to="/">Home</Link>
                    <br />
                <GymnasiumMap/>
            </div>
            
        </>
       
    )
}