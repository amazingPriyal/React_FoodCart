const INIT_STATE= {
    carts: []
}

export const cartreducer = (state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
        return {
            ...state,
            carts:[...state.carts,action.payload]
        }

        case "RMV_CART":  
        return {
            ...state,
            carts:state.carts.filter((e)=>{
              return  e.id !== action.payload
            })
        }

        default :
            return state
    }
}