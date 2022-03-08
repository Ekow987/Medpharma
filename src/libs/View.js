import React, { useContext } from "react";
// import {MedContext} from '../context/app.context'

export default function View(){
//    const state = useContext(MedContext)
     return(
         <div>
             <p>View Details</p>
             {/* {
                 state.map(item=>{
                     <div>
               <p key={item._id}> firstname:{item.firstname}</p>
                     <p>lastname:{item.lastname}</p>
                     <p>cardprice:{item.cardprice}</p>
                     </div>
                   
                 })
             } */}

         </div>

     );
}