import React, { useRef, useState } from 'react'

const EventsExample: React.FC = () => {
   const [value, setValue] = useState('')
   const [isDrag, setIsDrag] = useState<boolean>(false)
   const inputRef = useRef<HTMLInputElement>(null)

   const changeHandler =(e: React.ChangeEvent<HTMLInputElement>)=>{
      setValue(e.target.value)
   }

   const clickHandler =(e: React.MouseEvent<HTMLButtonElement>)=>{
      alert(`${value}`)
   }

   const dragHandler =(e: React.DragEvent<HTMLDivElement>)=>{
    console.log('drag')
   }

   const dropHandler=(e: React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
    setIsDrag(false)
    alert('drop')
   }

   const leaveHandler=(e: React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
    setIsDrag(false)
   }

   const dragWithPreventHandler=(e: React.DragEvent<HTMLDivElement>)=>{
    e.preventDefault()
    setIsDrag(true)
   }

  return (
    <div>
      <input type="text" value={value} onChange={changeHandler} placeholder='1' />
      <input type="text" ref={inputRef} placeholder='2' />
      <button onClick={clickHandler}>touch me</button>
      <div onDrag={dragHandler} draggable style={{width:200, height:200, background:'green'}}></div>
      <div
      draggable
      onDrop={dropHandler}
      onDragLeave={leaveHandler}
      onDragOver={dragWithPreventHandler}
      style={{width:200, height:200, background: isDrag ? 'blue':'green',marginTop:15}}></div>

    </div>
  )
}

export default EventsExample