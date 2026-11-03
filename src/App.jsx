// import React, { useState } from 'react'
// const App = () => {

//   const [num, setNum] = useState(50)
//   const [username, setUsername] = useState("Ayush")
//   const [users, setUsers] = useState([20,30,45,61,56])

//   function changeNum() {
//     setNum(90)
//     setUsername("Arpit")
//     setUsers([55,66,99])
//     }
//   return (
//     <div>
//       <h1>Marks of {username} is {num} <br/> Name of User  {username}. <br/> User ka array {users} </h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }
// export default App

import React, { useState } from 'react'
const App = () => {

  const [num, setNum] = useState(0)
  function increaeNum() {
    setNum(num+1)    
  }
  function decreaseNum() {
    setNum(num-1)    
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaeNum}>Increase</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}
export default App
