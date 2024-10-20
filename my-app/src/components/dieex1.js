function Die(){
    let die=Math.floor(Math.random()*6)+1
    return(
        <>
        <h2>This is the die{die}</h2>
        </>
    )
}
export default Die