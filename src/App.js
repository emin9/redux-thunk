
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { LoadPost } from './loadpost';


function App() {
   
   
  const  poss = useSelector(state => state)
  
 
  

  
  const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(LoadPost())
 },[])
 console.log(poss);
 

 
  return (
    <div>
      
    {poss.map(item => {
      return item.title
    })}
     
    
  
    </div>
  )
    
  }

export default App;
