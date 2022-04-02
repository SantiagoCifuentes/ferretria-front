import { createStore } from "redux";

const initialState={
        
    contenedor : [],
    productos:[]
}

const reducer = (state = initialState, action)=>
{
     switch (action.type) {
      case "GET":
          
        return {    
          
          contenedor :action.result                    
        } ;
        case"POST_FACTURA":
        return{
          ...state,
          productos: [...state.productos, action.data]
        }

        default:
        return state
        
    }
}

export default createStore(reducer)