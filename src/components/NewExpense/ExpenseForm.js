import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    /* const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: "",
    }); */

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        }); */
        /* etUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        }) */ //use this when the state change depends on the previous state
    };
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }); */
        /* setUserInput((prevState) => {
            return { ...prevState, enteredTAmount: event.target.value };
        }); */
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        /* setUserInput({
            ...userInput,
            enteredDate: event.target.value,
        }); */
        /* setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        }); */
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        setEnteredAmount("");
        setEnteredDate("");
        setEnteredTitle("");
    };

    return (
        <form
            action=''
            onSubmit={submitHandler}
        >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor=''>Title</label>
                    <input
                        type='text'
                        name=''
                        id=''
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                    <label htmlFor=''>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        name=''
                        id=''
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                    <label htmlFor=''>Date</label>
                    <input
                        type='date'
                        min='2020-01-01'
                        max='2023-12-31'
                        name=''
                        id=''
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button
                    type='button'
                    onClick={props.onCancel}
                >
                    Cancel
                </button>
                <button type='submit'>Add New Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
