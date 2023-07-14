import { PersonProps } from "./Person.types"

function Person({name}: PersonProps) {
    const {first, last} = name
  return (
    <div>{first} {last}</div>
  )
}

export default Person