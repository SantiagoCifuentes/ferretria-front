import { createStore } from "redux";

const initialState={
        
    contenedor : []
}

const reducer = (state = initialState, action)=>
{
     switch (action.type) {
      case "GET":
          
        return {         
          contenedor :action.result                    
        } 
        default:
        return state
        
    }
}

export default createStore(reducer)