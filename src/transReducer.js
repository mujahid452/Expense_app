import { act } from "react-dom/test-utils";

const transactionReducer= ( (state,action) => {
    
    switch(state.type) {
        case "Add_trans" : {
            return [state.payLoad, ...state]
        }
        default:
       return state;
    }
})
export default transactionReducer;