import { Data } from '@generated/data'
import { Link, Form } from '@adonisjs/inertia/react'
import logo from '../../assets/master.png'
import Button from './Button'

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
        <div className="center-navbar"></div>
        <div className="right-navbar">
          <div className="auth-navbar">
            {user ? (
              <>
                <span>{user.initials}</span>
                <Form route="session.destroy">Logout</Form>
              </>
            ) : (
              <>
                <Button route="new_account.create">register</Button>
                <Button route="session.create" >login</Button>
              </>
            )}
          </div>
        </div> 
      </div>
    </nav>
  )
}


