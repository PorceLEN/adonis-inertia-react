import { Link } from '@adonisjs/inertia/react'
import { Routes } from '~/types/Routes.type'

type LinkButtonProps = {
  children: React.ReactNode
  route: Routes
}

export default function LinkButton({ children, route }: LinkButtonProps) {
  return (
    <>
      <div className="global-button">
        <Link route={route}>{children}</Link>
      </div>
    </>
  )
}
