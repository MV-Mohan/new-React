// function Props2(props){
function Props2({name,city}){
    return(
        <div>
            {/* <h1>Hi My name is {props.name} from {props.city} using props</h1> */}
            <h1> this is {name} and from{city} from props</h1>
        </div>
    )
}
Props2.defaultProps ={
    name : "user",
    city : "Banglore"
}
export default Props2