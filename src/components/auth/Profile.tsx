
export type ProfileProps ={
    name: string
}
const Profile = ({name}: ProfileProps) => {
  return (
    <div>Private profile component {name}</div>
  )
}

export default Profile