import React, { useEffect, useState } from 'react'
import RecipeList from '../../components/RecipeList.jsx'
import './Home.css'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config.js'

const Home = () => {

    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        const ref = collection(db, 'recipes')
        getDocs(ref)
            .then((snapshot) => {
                if (snapshot.empty) {
                    setError('No Recipe List found')
                    setIsLoading(false)
                } else {
                    let result = []
                    snapshot.docs.forEach((doc) => {
                        result.push({
                            id: doc.id,
                            ...doc.data(),
                        })
                    })
                    setData(result)
                    setIsLoading(false)
                    console.log(snapshot)
                }
            })
    }, [])

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Home