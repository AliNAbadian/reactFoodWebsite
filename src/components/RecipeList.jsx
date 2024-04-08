import React from 'react'
import { Link } from 'react-router-dom'

import './RecipeList.css'
import deleteIcon from '../assets/delete-icon.svg'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebase/config'


const RecipeList = ({ recipes }) => {


    const handleClick = async (id) => {
        try {
            const ref = doc(db, 'recipes', id)
            await deleteDoc(ref)

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className='recipe-list'>
            {recipes.map((recipe) => (
                <div key={recipe.id} className='card'>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime}</p>
                    <div>{recipe.method.substring(0, 100)}...</div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img
                        className='delete'
                        src={deleteIcon}
                        onClick={() => { handleClick(recipe.id) }}
                    />
                </div>
            ))}
        </div>
    )
}

export default RecipeList