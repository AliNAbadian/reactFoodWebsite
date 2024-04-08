import RecipeList from '../../components/RecipeList.jsx'
import useCollection from '../../hooks/useCollection.jsx'
import './Home.css'

const Home = () => {

    const { collectionData: data, isLoading, error } = useCollection('recipes')

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isLoading && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data} />}
        </div>
    )
}

export default Home