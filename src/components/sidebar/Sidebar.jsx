import "./sidebar.css"

export default function Sidebar() {
  return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">About Me!</span>
                <img src="https://wallpaperaccess.com/full/4779674.jpg" alt="" />
                <p>about me text</p>
            </div>

            <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>   
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
            </div>

            {/* <div className="sidebarItem">
            <span className="sidebarTitle">Follow Us!</span> 
            <div className="sidebarSocial">

            </div>
            </div> */}
        </div>
  )
}
