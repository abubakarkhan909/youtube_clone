import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.svg'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.jpg'
import { Link } from 'react-router-dom'

const Navbar = ({ setSidebar,currentPath }) => {
  const toggleSidebar = () => {
    setSidebar(prev => !prev); // Toggle sidebar state
  };
  const isHomeRoute = currentPath === '/';
  return (
    <nav className='flex-div'>
      <div className='flex-div nav-left'>
        {isHomeRoute &&(
          <img className='menu-icon'  onClick={toggleSidebar} src={menu_icon} alt="" />
        )}
        <Link to='/'> 
          <img className='logo' src={logo} alt="" />  
        </Link>
      </div>
      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search..' />
          <img src={search_icon} alt="" />
        </div>
        
      </div>
      <div className='nav-right flex-div'>
        <img src={upload_icon} alt="" />
        <img src={more_icon} alt="" />
        <img src={notification_icon} alt="" />
        <img src={profile_icon} alt="" className='user-icon'/>
      </div>
    </nav>
  )
}

export default Navbar
