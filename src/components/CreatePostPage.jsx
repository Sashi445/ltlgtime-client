import CreatePostComponent from './CreatePost';
import Wrapper from './Wrapper';

const CreatePostPage = () => {
    return (<Wrapper>
        <div className='container py-5'>
            <div className="mb-3">
                <h3>Create Post</h3>
            </div>
            <CreatePostComponent />
        </div>
    </Wrapper>);
}

export default CreatePostPage;