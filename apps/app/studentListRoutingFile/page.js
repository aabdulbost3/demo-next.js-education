import Link from "next/link"
export default function StudentList() {
    

    return (
        <div>
            <h1>Student List</h1>

            <ul>
                <li><Link href="/studentList/Name"> Name</Link></li>
                <li><Link href="/studentList/Sammi"> Sammi</Link></li>
                <li><Link href="/studentList/3"> Toxir</Link></li>
                <li><Link href="/studentList/4"> Test</Link></li>
            </ul>
        </div>
    )
}