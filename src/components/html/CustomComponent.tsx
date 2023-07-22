
import { Greet } from "../Greet"
import React from "react"


export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.name}</div>
  )
}
