import {React, useState} from 'react';
const initialPayFullWageOrOthers = [
    {
        title: 'Full wage',
        id: 1,
    },
    {
        title: 'other',
        id: 0,

    }
];

const initialValuePayInsuranceOthers = 0;

const Insurance = () =>{
    const [fullWage, setFullWage] = useState(1);
    const changeSelectFullWageHandler = (id) => {
        setFullWage(id);
    }
    const [valuePayInsuranceOthers, setValuePayInsuranceOthers] = useState(initialValuePayInsuranceOthers);
    const changePayInsuranceOthers = (event) =>{
        setValuePayInsuranceOthers(event.target.value);
    }
    return(
        <section>
            <h4>Insurance</h4>
            <div>
                {initialPayFullWageOrOthers.map((item) =>{
                    return(
                        <div key={item.id}>
                            <label>{item.title}</label>
                            <input type='radio' checked={item.id === fullWage}onChange={() => {changeSelectFullWageHandler(item.id)}}/>
                        </div>
                    )
                })}
                <input value={initialValuePayInsuranceOthers} disabled={fullWage === 1} onChange={changePayInsuranceOthers}/>
                <label>VND</label>
            </div>
            <div>
                <label>Minimum wage</label>
                <input type='text'></input>
                <label>VND</label>
                <label>Social</label>
                <input type='text'></input>
                <label>%</label>
                <label>Health</label>
                <input type='text'></input>
                <label>%</label>
                <label>Unemployed</label>
                <input type='text'></input>
                <label>%</label>
            </div>
            <div>
                <label>Region</label>
                <input type="radio"></input>
                <label>I</label>
                <input type="radio"></input>
                <label>II</label>
                <input type="radio"></input>
                <label>III</label>
                <input type="radio"></input>
                <label>IV</label>
            </div>
        </section>
    )
}
export default Insurance;