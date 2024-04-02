import React from 'react'
import RecipeList from '../../components/RecipeList.jsx'
import { useFetch } from '../../hooks/useFetch.jsx'
import './Home.css'

const Home = () => {

    const { data, isLoading, error } = useFetch('http://localhost:3000/recipes')

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Home