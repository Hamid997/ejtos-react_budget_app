import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget,dispatch,expenses ,Currency} = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val < totalExpenses) {
			alert("You cannot reduce the budget value lower than the spending!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
		}
	}
	
	return (
		<div className='alert alert-secondary'>
			Budget: {Currency} <input 
            type="number" 
            step="10" 
            style={{ size: 10 }}
            value={budget} 
            max='20000'
            onInput={(event)=>changeBudget(event.target.value)}>
            </input>
		</div>
	);
};

export default Budget;
