'use client'



export default function Student({params}) {
    console.log(params);

    return(
        <div>
            <h1>Student Detalis</h1>
            <h3>Name : {params.student}</h3>
            
        </div>
    )
}