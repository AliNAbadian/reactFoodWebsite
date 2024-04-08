import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import './Recipe.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'

const Recipe = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        const ref = doc(db, 'recipes', id)
        getDoc(ref)
            .then(doc => {
                if (doc.empty) {
                    setError('No Recipe found')
                    setIsLoading(false)
                } else {
                    setIsLoading(false)
                    setRecipe(doc.data())
                }
            })
    }, [])
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