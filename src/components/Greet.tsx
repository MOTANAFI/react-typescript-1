

type GreetProps = {
  name: string
}
function Greet({name}: GreetProps) {
  return (
    <div>
        <h2>Welcome {name}!! You have 10 unread messages</h2>
    </div>
  )
}

export default Greet