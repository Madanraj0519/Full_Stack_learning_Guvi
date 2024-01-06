import './blogs.css';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const blogs = (props) => {
    const { blog } = props;
    return (
     <>
  <div class="col">
    <div class="card h-100">
      <img src={blog.imageUrl}class="card-img-top pointer" alt="image"/>
      <div class="card-body px-4">
        <h5 class="card-title text-start">{blog.title}</h5>
        <p class="card-text text-start">{blog.text}</p>
        <p className='card-text text-start text-success fw-medium read d-flex align-item-center gap-1  pointer'>READ MORE <span><MdKeyboardDoubleArrowRight /></span></p>
      </div>
      <div className="card-footer px-4 d-flex justify-content-between text-start bg-white text-body-tertiary">
        <p>{blog.postTime}</p>
        <p>No Comments</p>
      </div>
    </div>
  </div>
    </>
    );
}

export default blogs;