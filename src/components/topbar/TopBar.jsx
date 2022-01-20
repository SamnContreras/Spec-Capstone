import './topbar.css'
import {Link, useNavigate} from 'react-router-dom';

export default function TopBar() {
    const user = false;
    // const navigate=useNavigate()
    return (
        <div className='top'>
            {/* <div className='topLeft'>1</div> */}
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>
                        <Link className='link' to="/">Home</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">About</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/">Contact</Link>
                    </li>
                    <li className='topListItem'>
                        <Link className='link' to="/write">Write</Link>
                    </li>
                    <li className='topListItem'>
                        {user && "Log Out"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg" src="https://w0.peakpx.com/wallpaper/750/309/HD-wallpaper-bleach-ichigo-kurosaki-manga-sword.jpg" alt="" />
                    ) : (
                        <ul className='topList'>
                            <li className="topListItem">
                            <Link className='link' to="login/">Log in</Link>
                            </li>
                            <li className="topListItem">
                            <Link className='link' to="register/">Register</Link>
                            </li>
                        </ul>
                    )
                }
                <i className='topSearchIcon fas fa-search'></i>
            </div>
        </div>
    )
}
