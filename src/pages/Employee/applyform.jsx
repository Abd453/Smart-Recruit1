import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import logo from "../../assets/ie.png";
// import bgimg from "../../assets/bgImg/bgimg2.jpg";
import NavbarE from './navbarE';
import Footer from '../../components/Footer';

export default function ApplyForm() {
    const { userId, jobTitle } = useParams();
    console.log("User ID:", userId);
    console.log("Job Title:", jobTitle);

    const [data, setData] = useState({
        jobtitle: decodeURIComponent(jobTitle) || "",  // Decode the job title
        fname: "",
        lname: "",
        phoneno: "",
        email: "",
        physicaladdress: "",
        cv: null
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);

    useEffect(() => {
        if (userId) {
            axios.get(`http://localhost:8001/signupuser/${userId}`)
                .then(res => {
                    setData(prevData => ({
                        ...prevData,
                        ...res.data
                    }));
                })
                .catch(err => console.error(err));
        }
    }, [userId]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
            cv: files ? files[0] : prevData.cv
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};
    
        // Validation logic
        if (data.jobtitle === "") {
            isValid = false;
            validationErrors.jobtitle = "Job title required";
        }
        if (data.fname === "") {
            isValid = false;
            validationErrors.fname = "First name required";
        }
        if (data.lname === "") {
            isValid = false;
            validationErrors.lname = "Last name required";
        }
        if (data.phoneno === "") {
            isValid = false;
            validationErrors.phoneno = "Phone number required";
        }
        if (data.email === "") {
            isValid = false;
            validationErrors.email = "Email required";
        }
        if (data.physicaladdress === "") {
            isValid = false;
            validationErrors.physicaladdress = "Physical address required";
        }
        if (!data.cv) {
            isValid = false;
            validationErrors.cv = "CV required";
        }
    
        setErrors(validationErrors);
        setValid(isValid);
    
        if (isValid) {
            // Fetch existing data from server
            axios.get(`http://localhost:8001/signupuser/${userId}`)
                .then(response => {
                    const existingData = response.data;
    
                    // Merge existing data with new data
                    const updatedData = {
                        ...existingData,
                        jobtitle: data.jobtitle,
                        fname: data.fname,
                        lname: data.lname,
                        phoneno: data.phoneno,
                        email: data.email,
                        physicaladdress: data.physicaladdress,
                        cv: data.cv ? data.cv.name : existingData.cv // Preserve existing CV if no new file is uploaded
                    };
    
                    // Send merged data to server
                    axios.put(`http://localhost:8001/signupuser/${userId}`, updatedData, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                    .then(result => {
                        alert("Success");
                        setData({
                            jobtitle: "",
                            fname: "",
                            lname: "",
                            phoneno: "",
                            email: "",
                            physicaladdress: "",
                            cv: null
                        });
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.error(err));
        }
    };
    

    return (
        <div>
            <NavbarE userId={userId} />
            <div className='bg-cover bg-center flex' >
                <div className="max-w-4xl mx-auto font-sans p-6">
                    <div className="text-center mb-16">
                        <a href="">
                            <img src={logo} alt="logo" className="w-52 inline-block" />
                        </a>
                        <h4 className="text-2xl font-bold text-green-600 shadow-md shadow-black pb-4">
                            Job Apply Form
                        </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <label className="text-gray-700 text-sm font-semibold mb-2 block">Job Title</label>
                                <input
                                    name="jobtitle"
                                    type="text"
                                    value={data.jobtitle}
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Job title"
                                    readOnly
                                />
                                {errors.jobtitle && <p className="text-red-500 text-sm">{errors.jobtitle}</p>}
                            </div>
                            <div>
                                <label className="text-gray-700 text-sm font-semibold mb-2 block">First Name</label>
                                <input
                                    name="fname"
                                    type="text"
                                    value={data.fname}
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="First name"
                                />
                                {errors.fname && <p className="text-red-500 text-sm">{errors.fname}</p>}
                            </div>
                            <div>
                                <label className="text-gray-700 text-sm font-semibold mb-2 block">Last Name</label>
                                <input
                                    name="lname"
                                    type="text"
                                    value={data.lname}
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Last name"
                                />
                                {errors.lname && <p className="text-red-500 text-sm">{errors.lname}</p>}
                            </div>
                            <div>
                                <label className="text-gray-700 text-sm font-semibold mb-2 block">Phone Number</label>
                                <input
                                    name="phoneno"
                                    type="text"
                                    value={data.phoneno}
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Phone number"
                                />
                                {errors.phoneno && <p className="text-red-500 text-sm">{errors.phoneno}</p>}
                            </div>
                            <div>
                                <label className="text-gray-700 text-sm font-semibold mb-2 block">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Email"
                                />
                                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                            </div>
                            <div>
                                <label className="text-gray-700 text-sm font-semibold mb-2 block">Physical Address</label>
                                <input
                                    name="physicaladdress"
                                    type="text"
                                    value={data.physicaladdress}
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                    placeholder="Physical address"
                                />
                                {errors.physicaladdress && <p className="text-red-500 text-sm">{errors.physicaladdress}</p>}
                            </div>
                            <div>
                                <label className="text-gray-700 text-sm font-semibold mb-2 block">Upload CV</label>
                                <input
                                    name="cv"
                                    type="file"
                                    onChange={handleChange}
                                    className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                                />
                                {errors.cv && <p className="text-red-500 text-sm">{errors.cv}</p>}
                            </div>
                        </div>

                        <div className="mt-12 flex justify-center">
                            <button
                                type="submit"
                                className="py-3 px-6 text-white bg-green-500 rounded-lg hover:bg-green-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}
