import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getVisiblesExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expensesCount, expensesLength, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    const hiddenExpensesCount = expensesLength !== expensesCount ? expensesLength - expensesCount : 0;

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
                    {hiddenExpensesCount > 0 && <div className="page-header__note">{hiddenExpensesCount} expenses added, but they are hidden, try clearing the date range</div>}
                </h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = getVisiblesExpenses(state.expenses, state.filters);
    const total = getExpensesTotal(visibleExpenses) / 100;

    return {
        expensesCount: visibleExpenses.length,
        expensesLength: state.expenses.length,
        expensesTotal: total,
    };
};

export default connect(mapStateToProps)(ExpensesSummary);