import {useState,useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)
    const [isPending,setisPending] = useState(true)
    const [error,setError] = useState(null)
    
    
    
    useEffect(() => {
        console.log('this is the useeffect hook')
        setTimeout(() => {
             fetch('http://localhost:3500/blogs')
                 .then(res => {
                     
                     console.log(res)
                     
                     if (!res.ok) {
                         
                    throw Error('could not fetch the  data')
                }
            return res.json()
            })
            .then(data => {
                // console.log(data)
                setBlogs(data)
                setisPending(false)
                setError(null)
            
            })
                 .catch(err => {
                     setisPending(false)
                setError(err.message)
            })
           
        },1000)
        





 },[])


    
    return ( 
        <div className="home">
             { error && <div>{error} </div>}
            { isPending && <div>Loading....</div>}
           { blogs && <BlogList blogs={blogs} title='All blogs!'  />}

            
           
        </div>
     );
}
 
export default Home;