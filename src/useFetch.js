
import {useState,useEffect} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending,setisPending] = useState(true)
    const [error,setError] = useState(null)


        useEffect(() => {
      
        setTimeout(() => {
             fetch(url)
                 .then(res => {
                     
                     
                     
                     if (!res.ok) {
                         
                    throw Error('could not fetch the  data')
                }
            return res.json()
            })
            .then(data => {
                // console.log(data)
                setData(data)
                setisPending(false)
                setError(null)
            
            })
                 .catch(err => {
                     setisPending(false)
                setError(err.message)
            })
           
        },1000)
        





 },[url])
    

return {data, isPending, error}


}



export default useFetch;