function RandomName(){
    let name=["prakash","kamal","chintu","chinnu"];
    let random=Math.floor(Math.random()*name.length) +1
    return (
        <div style={{backgroundColor: 'brown'}}>
            {/* <h2>THis is the first{name} man</h2> */}
            <h2>THis is the first {name[random]}, bro man</h2>
            <h2>This is the random values refresh the page  {random}</h2>

        </div>
    )
}
export default RandomName