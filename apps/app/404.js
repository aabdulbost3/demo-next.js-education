import Link from 'next/link'
const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found Page</h1>
      <Link href={"/"}> <h1>--- Back</h1></Link>
    </div>
  )
}

export default NotFoundPage
