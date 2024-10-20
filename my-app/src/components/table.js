function Table(){
      const Student=[
        {id:1,studentName:"kiran",age: 25, city: "hyderabad"},
        {id:2,studentName:"kumar",age: 26, city: "hyderabad"},
        {id:3,studentName:"venakat",age: 23, city: "Banglore"},

       
      ]
    return(
        <>
        <div>
            <h1>This the table</h1>

            <table>
                <thead>
                <tr>
                    <th>S.NO</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>CITY</th>
                </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                        <td>2</td>
                    </tr> */}

                    {
                     Student.map((student,index)=>(
                            <tr>
                                 <td>{student.id}</td>
                                 <td>{student.studentName}</td>
                                 <td>{student.age}</td>
                                 <td>{student.city}</td>

                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
        </>
    )
}
export default Table