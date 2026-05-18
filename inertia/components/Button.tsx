import { Link } from "@adonisjs/inertia/react"
import { Routes } from "~/types/Routes.type"

type ButtonProps = {
  children: string;
  route: Routes;
}

export default function Button({ children, route }: ButtonProps) {
  return (
    <>
      <div className="global-button">
        <Link route={route}>{children}</Link>
      </div>
    </>
  )
}