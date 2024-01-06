import './blogsNav.css';
import { Link } from 'react-router-dom';

const blogsNav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-lg p-3 bg-body-tertiary rounded mt-2 nav-style">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse blogs" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <Link className='blogs-route nav-item nav-link' to="/">ALL</Link>
                    <Link className='blogs-route nav-item nav-link' to="/fSD" >FULL STACK DEVELOPMENT</Link>
                    <Link className='blogs-route nav-item nav-link' to="/dataScience" >DATA SCIENCE</Link>
                    <Link className='blogs-route nav-item nav-link' to="/cyberSecurity" >CYBER SECURITY</Link>
                    <Link className='blogs-route nav-item nav-link' to="/career">CAREER</Link>
                </div>
            </div>
        </nav>
    );
}

export default blogsNav;