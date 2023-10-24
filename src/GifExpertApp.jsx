import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    
    const [ categories, setCategories ] = useState([ 'Bienvenido' ]);
    

    //Esta funcion se pasa como prop al componente AddCategory
    const onAddCategory = ( newCategory ) => {//sirve para agregar una nueva categoria
        if ( categories.includes(newCategory) ) return;//valida que no se repita la categoria
        setCategories([ newCategory, ...categories ]);
    }
    

    return (
        <>

            <h1>Buscador de Gifs </h1>

    
            <AddCategory 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            { 
                categories.map( ( category ) => (
                    <GifGrid 
                        key={ category } 
                        category={ category } />
                ))
            }




        </>
    )
}
