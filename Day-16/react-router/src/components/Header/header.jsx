import './header.css';
import {useLocation} from 'react-router-dom'

const Header = (props) => {

    const { blogsHeader} = props;
    const location = useLocation();

    console.log(location.pathname)
    return (
     <>
      {
        location.pathname === '/' ? (
            <img src='https://www.guvi.in/blog/wp-content/uploads/2022/10/blog-header-2048x315.png' className='w-100 mt-2' />
           ) : (
            <div className="header container">
               <h2 className='fw-semibold'>{blogsHeader.title}</h2>
               <p className='fw-regular'>{blogsHeader.description}</p>
           </div>
           )
      }
     </>
    );
}

export default Header;