import { useState } from "react"


/**
 * Component for adding a new category.
 * @returns {JSX.Element} JSX form element with input field for adding a new category.
 */
export const AddCategory = (setCategories) => {
    const [inputValue, setInputValue] = useState('Baki');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <=1) {
            return;
        }
        console.log(inputValue);
        setCategories( categories => [inputValue,...categories] );
        setInputValue('');
    
    }

    
    /*Para añadir nuevas categorias usamos el spread operator para copiar el arreglo existente y luego insertamos lo nuevo */
    const onAddCategory = () => {
        setCategories( [inputValue,...categories] );
        
    }

    return (
        <form onSubmit={(e)=>onSubmit(e)}>
            <input type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
