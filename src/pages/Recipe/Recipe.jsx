import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch.jsx'

import './Recipe.css'

const Recipe = () => {
    const { id } = useParams()
    const url = 'http://localhost:3000/recipes/' + id
    const { data: recipe, isLoading, error } = useFetch(url)
    return (
        <div className='recipe'>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Takes {recipe.cookingTime} to Cook.</p>
                    <ul>
                        {recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>
            )}
        </div>
    )
}

export default Recipe