import{ useState } from 'react'
import TransactionForm from "./TransactionForm"
import Modal from './Modal.jsx'

function DashboardHeader({
     onAddTransaction,
     selectedMonth,
     onMonthChange
}) {
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    
    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal(){
        setIsModalOpen(false)
    }

    return (
     <>
        <header ClassName="dashboard__header">
            <div>
                <h1>Olá, Leonardo!</h1>
                <p>Acompanhe aqui sua situação financeira.</p>
            </div>

            <div ClassName="dashboard__actions">
                <label className="month-selector">
                    <span>Mês</span>

                    <input 
                    type="month"
                    value={selectedMonth}
                    onChange={(event) =>
                        onMonthChange(event.target.value)}
                    />
                </label>

                <button className="new-transaction-button"
                type="button"
                onClick={openModal}
                >
                    + Nova transação
                </button>
            </div>
        </header>

        {isModalOpen && (
         <Modal title="Nova transação" onClose={closeModal}>
             <TransactionForm
                 onCancel={closeModal}
                 onAddTransaction={onAddTransaction}
             />
        </Modal>
)}

     </>
    )
}

export default DashboardHeader