
import { useState } from "react";
import "./index.css";

function CountCard({ icon, title,color }) {
 
    const [count,setCount]=useState(Math.floor(Math.random() * 100))

    return (
        <div className="count-card-container" style={{backgroundColor:color}}>

            <div className="left">
                <span class="material-symbols-outlined" style={{fontSize:"5rem"}}>
                    {icon}
                </span>
            </div>
            <div className="right">
               <h3>{count}</h3>
               <h3>{title}</h3>
            </div>


        </div>
    );
}

export default CountCard;