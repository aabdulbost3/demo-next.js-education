
import Nav from "../../nav/page"
import { useRouter  } from "next/navigation"
import Home from '../../page'


const Blog = () => {
    const router = useRouter()
    const  { Id, Blog} = router.query;


    return(
        <div>
            <Nav />
            <h1>Post : {Id}</h1>
            <h2>Blog : {Blog}</h2>
        </div>
    )
}
export default Blog;