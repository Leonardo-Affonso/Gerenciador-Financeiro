
export function calculateTransactionTotals(transactions) {
    const totals = transactions.reduce(
        (accumulator, transaction) => {                 
            if  (transaction.type === 'income') {
                accumulator.income += transaction.value
            }

            if (transaction.type === 'expense') {
                accumulator.expense += transaction.value
            }
            
            return accumulator
        },
        {
            income: 0,
            expense: 0,
        },
    )

    return {
        ...totals,
        balance: totals.income - totals.expense
    }
}