'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import Nav from "../../nav/page"
 

const PostRouting = () => { // Postni ichida Bloglarga o'tish
    // const router = useRouter();
    // const {id} = router

    return (
        <div>
            <Nav />
            <h1>Post : {params.id}</h1>

            <ul>
                <li>
                    <Link href="/[Blog]" >
                        1 Blog
                    </Link>
                </li>

                <li>
                    <Link href="/post/[id]/[Blog]" >
                       2 Blog
                    </Link>
                </li>

                <li>
                    <Link href="/post/[id]/[Blog]" >
                       3 Blog
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default PostRouting;