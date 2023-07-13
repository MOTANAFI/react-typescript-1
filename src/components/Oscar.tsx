type OscarProps = {
  children : React.ReactNode
}

function Oscar({children}: OscarProps) {
  return (
    <div>{children}</div>
  )
}

export default Oscar