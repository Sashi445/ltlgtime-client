import { serverUrl } from './../serverConfig';

const PostComponent = ({ post }) => {
    return (<div className="card shadow-4 p-2 mb-3">
        <img src={`${serverUrl}${post.image.slice(1)}`} alt="ImagePost" className="card-img" />
        <div className="card-body">
            <p>{post.postContent}</p>
        </div>
    </div>);
}

export default PostComponent;