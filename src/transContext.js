
import react, { createContext, useReducer } from "react"
import transactionReducer from "./transReducer";

const initialTtransactions = [
    { amount: 700, desc: "Cash" },
    { amount: 1000, desc: "Cash" },
    { amount: -100, desc: "Book" },
    { amount: -100, desc: "Book" },
    { amount: -500, desc: "Camera" }
]

export const transactionContext = createContext(initialTtransactions);

export const TransctionProvidor = ({ children }) => {
    let [state, dispatch] = useReducer(transactionReducer, initialTtransactions);
    function AddTransaction(transObj) {
        dispatch({
            type: "add_trans",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },
        })

    }
    return (
        <transactionContext.Provider value={{
            transctions: state,
            AddTransaction
        }}>
            {children}

        </transactionContext.Provider>
    )

}