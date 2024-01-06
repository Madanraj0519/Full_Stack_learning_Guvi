import './dataScience.css';
import BlogsNav from '../BlogsNav/blogsNav';
import Header from '../Header/header';
import Blogs from '../Blogs/blogs';

const dataScience = (props) => {
    const {blogsHeader, blogs} = props;
    return (
        <div className='dataScience container'>
            <Header blogsHeader={blogsHeader} />
            <BlogsNav />
            <div className="blogsArea">
                    <div className="row row-cols-1 row-cols-md-3 g-5 p-3">
                        {blogs.map((blog, index) => {
                            return <Blogs blog={blog} index={index} />
                        })}
                    </div>
                </div>
        </div>
    );
}

export default dataScience;