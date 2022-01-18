import './topbar.css'

export default function TopBar() {
    return (
        <div className='top'>
            {/* <div className='topLeft'>1</div> */}
            <div className="topCenter">
                <ul className="topList">
                    <li className='topListItem'>Home</li>
                    <li className='topListItem'>About</li>
                    <li className='topListItem'>Contact</li>
                    <li className='topListItem'>Write</li>
                    <li className='topListItem'>Log Out</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="" alt="" />
                <i className='topSearchIcon fas fa-search'></i>
            </div>
        </div>
    )
}