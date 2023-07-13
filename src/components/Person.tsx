type PersonProps = {
    name: {
        first: string,
        last: string
    }
}

function Person({name}: PersonProps) {
    const {first, last} = name
  return (
    <div>{first} {last}</div>
  )
}

export default Person