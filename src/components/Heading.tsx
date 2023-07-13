type HeadingProps = {
    children: string
}
function Heading({children }: HeadingProps) {
  return (
    <div>
        <h2>{children}</h2>
    </div>
  )
}

export default Heading