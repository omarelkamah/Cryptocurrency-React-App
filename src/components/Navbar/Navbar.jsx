import { Link } from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
        <i className='fab fa-gg icon'></i>
        <h1>
          Coin <span className='purple'>Search</span>
        </h1>
      </div>
    </Link>
  )
}

export default Navbar
