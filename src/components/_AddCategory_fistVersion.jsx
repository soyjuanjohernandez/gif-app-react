import { useState } from "react"

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setCategories(categories => [inputValue, ...categories])
        setInputValue('')
    }

    return (
        <form onSubmit={
            // (e) => onSubmitForm(e)
            onSubmitForm
        }
        >
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(e) => onInputChange(e)}
            />
        </form>
    )
}
