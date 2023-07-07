
import Nav from "../../nav/page"
import { useRouter  } from "next/navigation"


const Blog = ({params}) => {
    // const router = useRouter()
    // const  { id, Blog} = router.query;


    return(
        <div>
            <Nav />
            <h1>Post : {params.id}</h1>
            <h2>Blog : {params.blog}</h2>
        </div>
    )
}
export default Blog;