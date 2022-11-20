import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategrory = (category) => {

        /* Checking if the category already exists in the array. If it does, it will return an alert. */
        if (categories.includes(category)) return alert('el item ya existe');

        /* Adding the new category to the top of the list. */
        setCategories([category, ...categories])

    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* input buscar */}
            {/* //cuando se unsa 'on' + algo quiere decir que es algo que esta emitiendo  */}
            <AddCategory onNewCategory={value => onAddCategrory(value)} />

            {
                categories.map((category, i) => (
                    <GifGrid
                        category={category}
                        key={category}
                    />
                ))
            }

        </>
    )
}
