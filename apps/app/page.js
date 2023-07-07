import PostRouting from "./post/[Id]/page.js"
import Link from "next/link.js"
export default function Home() {
  return (
    <div>
      <h1>Hello, Home page!</h1>
      <Link href="/post/blog">blogga otish</Link>
      {/* <PostRouting /> */}
    </div>
  )
}
// day 2