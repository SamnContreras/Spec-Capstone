import "./singlePost.css"

export default function SinglePost() {
  return (  
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://s36700.pcdn.co/wp-content/uploads/2015/05/shutterstock_219143260-600x400.jpg.optimal.jpg" 
                alt="" className="singlePostImg" 
                />

                <h1 className="singlePostTitle">
                    Post Title
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Sam</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>

                <p className="singlePostDesc">Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                Description text Description text Description text Description text Description text
                </p>
            </div>
        </div>
     )
}
