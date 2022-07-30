import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const IncomeExpenses = () => {
  const {transactions}=useContext(GlobalContext);

  const amounts=transactions.map(transaction=>transaction.amount)
  
  let income=0
  let expense=0

  amounts.map(amount=>{
      const amount_1=Math.abs(amount)
      if(amount>0) income+=amount_1
      if(amount<0) expense+=amount_1
      return income
  })
  return (
    <div className="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p  className="money plus">+${income}</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p  className="money minus">-${expense}</p>
    </div>
  </div>
  )
}
