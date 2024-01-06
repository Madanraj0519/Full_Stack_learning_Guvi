import Header from '../Header/header';
import BlogsNav from '../BlogsNav/blogsNav';
import './all.css';
import Blogs from '../Blogs/blogs';

const All = (props) => {
    const {blogsHeader, blogs} = props;
    return (
        <div className="all container">
            <Header blogsHeader = {blogsHeader} headerUrl = {"https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png"} />
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

export default All;