import React from 'react'

function Button(props: { textName: string} ) {
  return (
    <>
      <button className='bg-[#B4BEC9] p-[.66rem_3rem_.66rem_3rem] rounded-[.5rem] text-[1rem] text-[#002333] hover:bg-[#96d3d4]'>{props.textName}</button>
    </>
  )
}

export default Button