
import { createContext, useContext, useState } from 'react';
import './App.css';
import { transactionContext } from './transContext';

function Child() {
    
let    {addTransaction}   = useContext(transactionContext);
//console.log(addTransaction);
    let [ newDesc, setDesc ] = useState("");
    let [ newAmount, setAmount ] = useState(0);

    const handleAddition = (event) => {
        event.preventDefault();
        
        addTransaction({
           amount:Number( newAmount),
           desc:newDesc
       }) 
      // setDesc("");
      // setAmount(0);
       
    }
const getIncome = () =>{
    let income =0;
    for( var i=0; i< transactions.length;i++){
        if(transactions[i].amount> 0){
            income += transactions[i].amount;
        }

    }
    
    return income;
    
} 
const getExpense = () =>{
    let expense =0;
    for( var i=0; i< transactions.length;i++){
        if(transactions[i].amount< 0){
        expense += transactions[i].amount;
        }

    }
 
    return expense;
} 
    let transactions = useContext(transactionContext);
   
    return (
        <div className='container'>
            <h1 className='text-center'>Expnse Tractor </h1>
            <h3 text-Container> Your Ballacne <br /> {getIncome() + getExpense()} </h3>
            <div className='expense-Contaier'>
                <h3 >   Income <br /> {getIncome()} </h3>
                <h3>Expnse <br />  {getExpense()} </h3>
            </div>
            <h3>History</h3>
            <hr />
            <ul className='transaction-list'>
                {transactions.map((tranObj, indx) => {

                    return (<li key={indx}>
                        <span> {tranObj.desc} </span>
                        <span> {tranObj.amount} </span>
                    </li>
                    )
                })}

            </ul>
            <h3> Add New Transaction</h3>
            <hr />
            <form className='trasaction-from' onSubmit={handleAddition} >
                <label>
                    <h3>Enter Description</h3>
                    <input type="text" value={newDesc} onChange={(ev) => setDesc(ev.target.value)} required />
                </label>
                <label>
                    <h3>Enter Amount</h3>
                    <input type="number" onChange={(ev) => setAmount(ev.target.value)} required />
                </label>
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    );
}

export default Child;