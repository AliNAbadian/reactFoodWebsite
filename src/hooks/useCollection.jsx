import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase/config'

const useCollection = (c) => {
    const [collectionData, setCollectionData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        let ref = collection(db, c)

        const unsub = onSnapshot(ref, (snapshot) => {

            if (snapshot.empty) {
                setError('no recipes found')
            } else {
                let result = []
                snapshot.docs.forEach((doc) => {
                    result.push({
                        id: doc.id,
                        ...doc.data(),
                    })
                    setCollectionData(result)
                    setIsLoading(false)
                })

            }
        })

        return () => unsub()
    }, [c])

    return { collectionData, isLoading, error }
}

export default useCollection