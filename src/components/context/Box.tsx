import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"


function Box() {
    const theme = useContext(ThemeContext)
  return (
    <div style={{background: theme.primary.main, color: theme.primary.text}}>Theme context</div>
  )
}

export default Box