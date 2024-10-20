import React from 'react'


let firstname="mohan"
let lastname="venaktesh"

let person={
    "name":"mohan",
    "age":23,
    "college":"st anns college of engineering and technology"
}

const Intro = () => {
  return (
    <div>
        <h1>Hello { firstname } , { lastname }</h1>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h3>{person.college}</h3>
    </div>
  )
}

export default Intro