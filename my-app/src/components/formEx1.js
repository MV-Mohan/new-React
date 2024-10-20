import React from 'react'

const FormEx1 = () => {
  return (
   <div className='App'>
<form>
    <label for="user">Username :</label>
    <input type="text" name="user" id="user" onChange={()=>(console.log('-'))}/>
    <input type="submit"/>
</form>
   </div>
  )
}

export default FormEx1