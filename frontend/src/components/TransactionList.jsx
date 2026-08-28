function TransactionList({ transactions}) {
    return (
        <section className="transactions">
            <div className="transactions__header">
                <h2>Transações recentes</h2>
                <button type="button">Ver todas</button>
            </div>

            {transactions.lenght === 0 ? (
                <p className="transactions__empty">
                    Nenhuma transação cadastrada.
                </p>
            ) : (
                <ul className="transactions__list">
                    {transactions.map((transaction) => (
                        <li className="transaction-item" key={transaction.id}>
                            <div>
                                <strong>{transaction.description}</strong>
                                <span>{transaction.category}</span>
                            </div>

                            <strong
                                className={
                                    transaction.type === 'income'
                                    ? 'transaction-item__value--income'
                                    : 'transaction-item__value--expense'
                                }
                            >
                                {transaction.type === 'income' ? '+' : '-'}{' '}
                                {transaction.value.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })}
                            </strong>
                        </li>
                    ))}
                </ul>
            )
        }    
        </section>
    )
}

export default TransactionList