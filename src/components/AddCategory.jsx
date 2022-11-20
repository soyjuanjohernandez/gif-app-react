import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (e) => {
        /* Preventing the default behavior of the form. */
        e.preventDefault();

        /* Checking if the inputValue is empty or has only one character. If it is, it will return
        nothing. */
        if (inputValue.trim().length <= 1) return;

       /* Calling the function `onNewCategory` and passing the value of `inputValue.trim()` as an
       argument. */
        onNewCategory(inputValue.trim()) /* Removing the spaces before and after the inputValue. */

        /* Resetting the input value to an empty string. */
        setInputValue('')
    }

    return (
        <form onSubmit={(e) => onSubmitForm(e)}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(e) => onInputChange(e)}
            />
        </form>
    )
}
