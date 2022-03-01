import {React, useState} from 'react';
const initialValue = {
    VND: '10000000',
    USD:'',
    changeRate:'23300'
}
const Income = () =>{
    const [incomeValues, setIncomeValues] = useState(initialValue);
    const changeVNDHandler = (event) =>{
        setIncomeValues((previous) =>{
            return {
                ...previous,
                VND: event.target.value,
            }
        });
    }
    const changeUSDHandler = (event) =>{
        setIncomeValues((previous) =>{
            return {
                ...previous,
                USD: event.target.value,
            }
        });
    }
    const changeRateHandler = (event) =>{
        setIncomeValues((previous) =>{
            return {
                ...previous,
                changeRate: event.target.value,
            }
        });
    }
    return(
        <section>
            <h4>Income</h4>
            <div>
                <label>VND:</label>
                <input type='text' value={incomeValues.VND} onChange={changeVNDHandler}/>
                <label>USD</label>
                <input type='text' value={incomeValues.USD} onChange={changeUSDHandler}/>
                <label>Exchange rate: 1 USD =</label>
                <input type='text'value={incomeValues.changeRate} onChange={changeRateHandler}/>
                <label>VND</label>
            </div>
        </section>
    )
}

export default Income;