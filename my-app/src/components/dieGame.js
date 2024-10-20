function DieGame(){
    let rool1=Math.floor(Math.random()*6)+1
    let rool2=Math.floor(Math.random()*6)+1
    let result=rool1 == rool2;

    return(
        <div style={{border:'3px solid',borderColor: result ? "green" : "red",textAlign:'center'}}>
            <h1>DiCE GANE</h1>
            {/* { rool1 == rool2 ? <h2>You Won !</h2>: <h2>You Loss</h2>} */}
            {result && <h2>You Won !</h2>}
            <h3>ROOL 1 <h1>{rool1}</h1></h3>
            <h3>ROOL 2 <h1>{rool2}</h1></h3>

        </div>
    )

}
export default DieGame