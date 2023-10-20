import { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
    
/*usestate snippet*/
    //const [first, setfirst] = useState(second)
    const [categories, setCategories] = useState([ 'Saint Seiya', 'Hunter X Hunter', 'Full Metal Alchemist' ])

    /*Para añadir nuevas categorias usamos el spread operator para copiar el arreglo existente y luego insertamos lo nuevo */
    const onAddCategory = () => {
        setCategories( ['Ranma 1/2',...categories] );
        
    }

    /*Otra forma es con un callback*/
    // const onAddCategory = () => {
    //     setCategories( cats => [...cats, 'Ranma 1/2'] );

  return (
    <>
    {/*Titulo de la app*/}
    <h1>GifExpertApp</h1>
    <hr />
    {/*Input para buscar gifs*/}
    <AddCategory setCategories={ setCategories} />
        
        {/*Listado de gif*/}
        <ol>
            {categories.map( category => {
                return <li key={category}>{category}</li>
            },)}
        </ol>
    </>
  )
}
