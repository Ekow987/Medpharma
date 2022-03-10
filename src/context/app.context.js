import React, { createContext, useEffect, useReducer } from "react";
import { medActions } from "../store/actions/consult.actions";
import medReducer from "../store/reducer/consult.reducer";
import Axios from 'axios'

 export const MedContext = createContext();

export default function MedContextProvider ({children}){
    const all =[];
    const [state, dispatch] =useReducer(medReducer, all);

    useEffect(() => {
        async function loadData() {
          let result = await Axios({
            method: "GET",
            url: "http://localhost:5000/opds/",
          });
    
           dispatch(medActions.update(result.data));
          console.log(result.data)
        }
    
        loadData();
      }, []);

      return (
        <MedContext.Provider value={{ state, dispatch }}>
          {children}
        </MedContext.Provider>
      );
    
}