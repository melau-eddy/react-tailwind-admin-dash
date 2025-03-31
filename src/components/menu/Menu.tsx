import{ Link } from "react-router-dom"
import "./menu.scss"

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to='/'> 
        <img src="/home.svg" alt="" />
        <span className="listItemTitle">Home</span>
        </Link>
        <Link to='/'> 
        <img src="/profile.svg" alt="" />
        <span className="listItemTitle">Profile</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">MAIN</span>
        <Link to='/'> 
        <img src="/home.svg" alt="" />
        <span className="listItemTitle">Home</span>
        </Link>
        <Link to='/'> 
        <img src="/profile.svg" alt="" />
        <span className="listItemTitle">Profile</span>
        </Link>
      </div>
    </div>
  )
}

export default Menu