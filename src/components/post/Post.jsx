import "./post.css"

export default function Post() {
  return (
        <div className="post">
            <img className="postImg" src="https://c4.wallpaperflare.com/wallpaper/941/578/491/shihouin-yoruichi-bleach-purple-hair-hd-wallpaper-preview.jpg" alt=""
             />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Post Title</span>
                <hr />
                <span className="postDate">1 Hour Ago</span>
            </div>
            <p className="postDesc">Post Description Post Description Post Description Post Description Post Description Post Description Post Description Post Description</p>
        </div>
  )
}
