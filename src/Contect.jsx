import { getDatabase, set, ref } from 'firebase/database'
import React, { useState } from 'react'
import app from './dbconfig'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contect = () => {

    const db = getDatabase(app)

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")
    const [company, setCompany] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone || !company || !message || !email) {
            toast.error("Must fill this form...")
            return false
        }

        let userid = Math.floor(Math.random() * 10000);
        set(ref(db, "contect" + userid), {
            email: email,
            phone: phone,
            name: name,
            message: message,
            company: company
        })

        setEmail("")
        setPhone("")
        setName("")
        setMessage("")
        setCompany("")
    }

    return (
        <div style={{ background: "#2B547E", height: "100vh" }}>
            <div className="container">
                <div className="row">

                    <div className="col-lg-5 mx-auto">
                        <h2 align="center" className='mt-5 text-light'>Contect Page</h2>
                        <form className='p-5 mt-4 shadow bg-light' onSubmit={handleSubmit}>
                            <div className="d-flex justify-content-between">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control" style={{ border: "1px solid #2B547E" }} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name || ""} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Company</label>
                                    <input type="text" className="form-control" style={{ border: "1px solid #2B547E" }} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setCompany(e.target.value)} value={company || ""} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email message</label>
                                    <input type="email" className="form-control" style={{ border: "1px solid #2B547E" }} id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                    <input type="number" className="form-control" style={{ border: "1px solid #2B547E" }} id="exampleInputPassword1" onChange={(e) => setPhone(e.target.value)} value={phone || ""} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                                <textarea name="" id="" className="form-control " style={{ border: "1px solid #2B547E" }} rows={3} onChange={(e) => setMessage(e.target.value)} value={message || ""}></textarea>
                            </div>
                            <div className="button mt-4">
                                <button type="submit" className="btn w-100 py-2 text-light" style={{ background: "#2B547E" }}>Submit</button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
            />
        </div>
    )
}

export default Contect
