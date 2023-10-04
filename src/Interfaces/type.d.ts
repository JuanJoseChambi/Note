import { MouseEventHandler } from "react"

export interface Children {
    children: JSX.Element
}
export interface ButtonInt {
    text:string
    onClick: MouseEventHandler<HTMLButtonElement>
}