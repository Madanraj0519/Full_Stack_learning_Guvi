import './footer.css';

const footer = () => {
    return (
        <div className='footer-space'>
            <div className="container row-space">
                <div className="row ">
                    <div className="col-6 text-start">
                        <p>Terms and Condition | <span>Privacy Policy</span></p>
                    </div>
                    <div className="col-6 text-end">
                        <p>GUVI Network Pvt. Ltd.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default footer;