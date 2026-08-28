import { useState } from 'react'

const initialFormData = {
    description: '',
    value: '',
    type: 'expense',
    category: '',
    date: '',
}

function TransactionForm({onCancel, onAddTransaction}) {
    const [formData, setFormData] = useState(initialFormData)

    const [errors, setErrors] = useState({})

    function handleChange(event) {
        const { name, value } = event.target

        setFormData((currentFormData) => ({
            ...currentFormData,
            [name]: value,
        }))
    }

    function validateForm() {
  const validationErrors = {}

  if (!formData.description.trim()) {
    validationErrors.description = 'Informe uma descrição.'
  }

  if (!formData.value || Number(formData.value) <= 0) {
    validationErrors.value = 'Informe um valor maior que zero.'
  }

  if (!formData.category) {
    validationErrors.category = 'Selecione uma categoria.'
  }

  if (!formData.date) {
    validationErrors.date = 'Informe uma data.'
  }

  return validationErrors
}

    function handleSubmit(event) {
  event.preventDefault()

  const validationErrors = validateForm()

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors)
    return
  }

  const newTransaction = {
    id: crypto.randomUUID(),
    ...formData,
    description: formData.description.trim(),
    value: Number(formData.value),
  }

  onAddTransaction(newTransaction)
  setFormData(initialFormData)
  setErrors({})
  onCancel()
}

    return (
        <form 
        className="transaction-form" 
        onSubmit={handleSubmit}
        noValidate
        >
            <label className="form-field">
                <span>Descrição</span>

                <input 
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Ex.: Supermercado"
                aria-invalid={Boolean(errors.description)}
                aria-describedby={
                    errors.description ? 'description-error' : undefined
                }
                />
                {errors.description && (
                    <small 
                        className="form-field__error"
                        id="description-error"
                    >
                        {errors.description}
                    </small>
                )}
            </label>

            <div className="form-row">
                <label className="form-field">
                    <span>Valor</span>

                    <input 
                    type="number"
                    name="value"
                    value={formData.value}
                    onChange={handleChange}
                    placeholder="0,00"
                    min="0.01"
                    step="0.01"
                    aria-invalid={Boolean(errors.value)}
                    aria-describedby={errors.value ? 'value-error' : undefined} 
                    />

                    {errors.value && (
                     <small 
                         className="form-field__error"
                         id="value-error">
                       {errors.value}
                     </small>
)}
                </label>


                <label className="form-field">
                    <span>Tipo</span>

                    <select 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    >
                        <option value="income">Receita</option>
                        <option value="expense">Despesa</option>
                    </select>
                </label>
            </div>

            <div className="form-row">
                <label className="form-field">
                    <span>Categoria</span>

                    <select 
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.category)}
                        aria-describedby={errors.category ? 'category-error' : undefined}
                    >
                        {errors.category && (
                            <small className="form-field__error"
                            id="category-error">
                                {errors.category}
                            </small>
                        )}
                        <option value="">Selecione</option>
                        <option value="alimentação">Alimentação</option>
                        <option value="moradia">Moradia</option>
                        <option value="transporte">Transporte</option>
                        <option value="salario">Salário</option>
                        <option value="lazer">Lazer</option>
                    </select>
                </label>

                <label className="form-field">
                    <span>Data</span>

                    <input 
                     type="date"
                     name="date" 
                     value={formData.date}
                     onChange={handleChange}
                     aria-invalid={Boolean(errors.date)}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                    />

                    {errors.date && (
                        <small 
                        className="form-field__error"
                        id="date-error">
                            {errors.date}
                        </small>
                    )}
                </label>
            </div>

            <div className="transaction-form__actions">
                <button
                 className="modal-cancel-button"
                 type="button"
                 onClick={onCancel}
                >
                    Cancelar
                </button>

                <button className="transaction-submit-button" type="submit">
                    Cadastrar transação
                </button>
            </div>
        </form>
    )
}

export default TransactionForm