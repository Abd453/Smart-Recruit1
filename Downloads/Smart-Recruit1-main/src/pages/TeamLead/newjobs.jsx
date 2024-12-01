import React, { useEffect, useState } from 'react';
import logo from "../../assets/logo.png";
import axios from "axios";
import Footer from '../../components/Footer';
import Db from '../../data/db.json'; // Ensure this import is correct

export default function NewJobs() {
    const [data, setData] = useState({
        title: "",
        time: "",
        location: "",
        pertemp: "",
        money: "",
        description: ""
    });
    const [errors, setErrors] = useState({});
    const [valid, setValid] = useState(true);
    const [jobTitles, setJobTitles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8001/departments')
            .then(response => {
                if (Array.isArray(response.data)) {
                    const titles = response.data.map(department => department.title);
                    setJobTitles(titles);
                }
            })
            .catch(error => console.error("Error fetching job titles:", error));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
          ...prevData,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        let validationErrors = {};

        if (data.title === "") {
            isValid = false;
            validationErrors.title = "Job title required";
        }
        if (data.time === "") {
            isValid = false;
            validationErrors.time = "Time required";
        }
        // Add more validations as needed

        setErrors(validationErrors);
        setValid(isValid);

        if (isValid) {
            axios.post('http://localhost:8001/jobs', data)
                .then(result => {
                    alert("Success");
                    // Reset the form or handle success
                    setData({
                        title: "",
                        time: "",
                        location: "",
                        pertemp: "",
                        money: "",
                        description: ""
                    });
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="max-w-4xl mx-auto font-sans p-6">
            <div className="text-center mb-16">
                <a href="">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-52 inline-block"
                    />
                </a>
                <h4 className="text-gray-800 text-base font-semibold mt-6">
                    Jobs to be requested
                </h4>
            </div>


            <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Job Title</label>
                        <select
                            name="title"
                            value={data.title}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Job title"
                        >
                            <option value="">Select Job Title</option>
                            {jobTitles.map((title, index) => (
                                <option key={index} value={title}>{title}</option>
                            ))}
                        </select>
                        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Time</label>
                        <input
                            name="time"
                            type="text"
                            value={data.time}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Time"
                        />
                        {errors.time && <p className="text-red-500 text-sm">{errors.time}</p>}
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Location</label>
                        <input
                            name="location"
                            type="text"
                            value={data.location}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Location"
                        />
                        {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Permanent/Temporary</label>
                        <input
                            name="pertemp"
                            type="text"
                            value={data.pertemp}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Permanent / Temporary"
                        />
                        {errors.pertemp && <p className="text-red-500 text-sm">{errors.pertemp}</p>}
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Money</label>
                        <input
                            name="money"
                            type="text"
                            value={data.money}
                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Money"
                        />
                        {errors.money && <p className="text-red-500 text-sm">{errors.money}</p>}
                    </div>
                    <div>
                        <label className="text-gray-800 text-sm mb-2 block">Description</label>
                        <textarea
                            name="description"
                            value={data.description}

                            onChange={handleChange}
                            className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                            placeholder="Description"
                        />
                        {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                    </div>
                </div>

                <div className="mt-12 flex justify-center">
                    <button
                        type="submit"
                        className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                        Submit
                    </button>
                </div>
            </form>
            <Footer />
        </div>
    );
}
