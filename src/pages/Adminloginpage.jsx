import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Adminloginpage = () => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Admin Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Admin Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                />
            </div>



            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Adminloginpage;
