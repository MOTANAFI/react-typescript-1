import React from "react"

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputProps) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => void
    console.log(event)
  return <input type='text' value={props.value} onChange={handleInputChange}/>
}

export default Input