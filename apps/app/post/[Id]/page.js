'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import Nav from "../../nav/page"
 

const PostRouting = () => { // Postni ichida Bloglarga o'tish
    const router = useRouter();
    const {Id} = router.query

    return (
        <div>
            {/* <Nav /> */}
            <h1>Post : {Id}</h1>

            <ul>
                <li>
                    <Link href="/[Blog]" as={`./post/${Id}/1`}>
                        1 Blog
                    </Link>
                </li>

                <li>
                    <Link href="/post/[Id]/[Blog]" as={`/post/${Id}/2`}>
                       2 Blog
                    </Link>
                </li>

                <li>
                    <Link href="/post/[Id]/[Blog]" as={`/post/${Id}/3`}>
                       3 Blog
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default PostRouting;