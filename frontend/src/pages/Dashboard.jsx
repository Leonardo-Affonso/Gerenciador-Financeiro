import Sidebar from '../components/Sidebar'
import SummaryCard from '../components/SummaryCard'
import '../styles/dashboard.css'
import DashboardHeader from '../components/DashboardHeader'
import {useState} from 'react'
import TransactionList from '../components/TransactionList'
import {calculateTransactionTotals} from '../utils/finance'
import {formatCurrency} from '../utils/formatters'

const initialTransactions = [
  {
    id: '1',
    description: 'Salário',
    value: 8500,
    type: 'income',
    category: 'salario',
    date: '2026-08-05',
  },
  {
    id: '2',
    description: 'Supermercado',
    value: 450,
    type: 'expense',
    category: 'alimentacao',
    date: '2026-08-04',
  },
  {
  id: '3',
  description: 'Conta de luz',
  value: 200,
  type: 'expense',
  category: 'moradia',
  date: '2026-07-15',
  },
]

function Dashboard() {
   
    const [transactions, setTransactions] = useState(initialTransactions)

    const [selectedMonth, setSelectedMonth] = useState('2026-08')

function addTransaction(newTransaction) {
  setTransactions((currentTransactions) => [
    newTransaction,
    ...currentTransactions,
  ])
}

const filteredTransactions = transactions.filter(
  (transaction) => transaction.date.startsWith(selectedMonth)
)

const totals = calculateTransactionTotals(filteredTransactions)

    return (
    <div className="dashboard-layout">
        <Sidebar />

        <main className="dashboard">

         <DashboardHeader
            onAddTransaction={addTransaction} 
            selectedMonth={selectedMonth}
            onMonthChange={setSelectedMonth}          
         />

            <section className="summary">
                <SummaryCard
                    title="saldo atual"
                    value={formatCurrency(totals.balance)}
                    type="balance"
                />

                <SummaryCard
                    title="Receitas"
                    value={formatCurrency(totals.income)}
                    type="income"
                />

                <SummaryCard
                    title="Despesas"
                    value={formatCurrency(totals.expense)}
                    type="expense"
                />
            </section>

            <TransactionList transactions={filteredTransactions}  />     
        </main>
    </div>
    )
}

export default Dashboard