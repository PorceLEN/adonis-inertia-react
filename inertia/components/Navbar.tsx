import { Data } from '@generated/data'
import { Link, Form } from '@adonisjs/inertia/react'
import logo from '../../assets/master.png'
import LinkButton from './global/LinkButton.global'

export default function Navbar({ user }: { user: Data.SharedProps['user'] }) {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <div className="left-navbar">
          <div className="logo-navbar">
            <Link route="home">
              <img src={logo} alt="logo master pro" />
            </Link>
          </div>
        </div>
        <div className="center-navbar">
          <ul className="menu-navbar">
            <li className="option-menu-navbar">Nos produits</li>
            <li className="option-menu-navbar">Nos catalogues</li>
            <li className="option-menu-navbar">Les promotions</li>
            <li className="option-menu-navbar">Nous contacter</li>
          </ul>
        </div>
        <div className="right-navbar">
          <div className="auth-navbar">
            {user ? (
              <>
                <span>{user.initials}</span>
                <Form route="session.destroy">Logout</Form>
              </>
            ) : (
              <>
                <LinkButton route="new_account.create">register</LinkButton>
                <LinkButton route="session.create">login</LinkButton>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
