import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input 
        className='inputBox'
        type="text"
        placeholder='User input'
        onChange={(e)=> {
            props.setColor(()=>e.target.value);
        }}

        />
    </div>
  )
}

export default Input