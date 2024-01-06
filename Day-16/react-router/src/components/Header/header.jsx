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
            <img src={blogsHeader.imageUrl} className='w-100 mt-2' />
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