import React, { useState } from "react";
import Heading from "./components/UI/Heading";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "News Paper",
        amount: 3000,
        date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 23799, date: new Date(2021, 2, 12) },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 1022294,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 8450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    // return React.createElement(
    //   'div',
    //   {},
    //   React.createElement('h2', {}, "Let's get started!"),
    //   React.createElement(Expenses, { items: expenses })
    // );

    return (
        <div>
            <Heading />
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
