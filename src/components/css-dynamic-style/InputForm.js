import React, { useEffect, useState } from 'react'
import './cssStyle.css';
function InputForm() {
   const [name,setName] = useState('');
   const [validInput,setValidInput] = useState(true);

   useEffect(()=>{
    if(name.length < 2){
     setValidInput(false);
    }else{
     setValidInput(true);
    }
   },[name]);

    const changeValue = (e) => {
      setName(e.target.value);
      
    }
  return (
    <div>
        <form>
             <input name="text" value={name} onChange={changeValue} 
             className={`${validInput ? 'valid':'invalid'}`}
            //  className={`${validInput && 'valid'}`}
             />
           
        </form>
    </div>
  )
}

export default InputForm;