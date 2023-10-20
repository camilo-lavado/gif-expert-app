import React, { useState } from 'react'

export const GifExpertApp = () => {
    
/*usestate snippet*/
    //const [first, setfirst] = useState(second)
    const [categories, setCategories] = useState([ 'Saint Seiya', 'Hunter X Hunter', 'Full Metal Alchemist' ])

  return (
    <>
    {/*Titulo de la app*/}
    <h1>GifExpertApp</h1>
    <hr />
    {/*Input para buscar gifs*/}
        {/*Listado de gif*/}
        <ol>
            {categories.map( category => {
                return <li key={category}>{category}</li>
            },)}
        </ol>
    </>
  )
}
