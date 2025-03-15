// import React, { useEffect } from 'react'
// import react,{useState} from 'react'
import ProductList from './components/ProductList'
// import Fetch from './Fetch'
const App = () => {
//  const [name, setName] = useState("");
//  const [email, setEmail] = useState("");
//  const[number,setNumber] =useState(0);


// // use of use effetct
// const [isInside,setIsInSide]=useState(false);
//  useEffect(()=>{
//   if(isInside){
//     alert("You are inside the room");}
//     else{
//       alert("You are outside the room");
//     }

//  },[isInside])


//  const handleSubmit =(e) => {
//   e.preventDefault();
//   alert(`Name ${name} \n Email  ${email}\n Number ${number}`);
//  }

//  console.log({name,email,number});
 
  return (
    
    <>
    {/*<div>
      <p>{isInside?" You are  inside the room":" You are outside of room"}</p>
      <button 
      onClick={()=> setIsInSide(!isInside)}>Enter/Exit</button>
    </div>



         <div>
          <form action="" onSubmit={handleSubmit}>
            <div className=''>
              <label>Name:</label>
              <input type="text"
               value={name} 
               onChange={(e) => setName(e.target.value)} />
            </div>

            <div className=''>
              <label>Email:</label>
              <input type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className=''>
              <label>Ph Number:</label>
              <input type="number" className='text-slate-900'
              value={number} 
              onChange={(e) => setNumber(e.target.value)} />
            </div>

            <button type='submit'> submit</button>

          </form>
         </div> */}
{/*   
    <Fetch
     /> */}

    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
    <ProductList />
    </div>

     
    </>
  )
}

export default App
