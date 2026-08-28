function SummaryCard({ title, value, type}) {
    return(
        <article className={`summary-card summary-card--${type}`}>
            <p className="summary-cad__title">{title}</p>
            <strong className="summary-card__value">{value}</strong>
        </article>
    )
}

export default SummaryCard