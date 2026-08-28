const menuItems = [
    { id: 1, label: 'Visão Geral'},
    { id: 2, label: 'Transações'},
    { id: 3, label: 'Categorias'},
    { id: 4, label: 'Configurações'},
]

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__logo">
                <span>GF</span>
                <strong>Gerenciador Financeiro</strong>
            </div>
            
            <nav className="sidebar__navigation">
                {menuItems.map((item) => (
                    <button 
                        className={`sidebar__item ${
                        item.id === 1 ? 'sidebar__item--active' : ''
                        }`}
                        key={item.id}
                        type="button"
                    >
                        {item.label}

                    </button>
                ))}
            </nav>
        </aside>
    )
}

export default Sidebar