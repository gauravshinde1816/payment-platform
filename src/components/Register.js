// import "./App.css";
import React, { useState } from "react";
import Logo from "../nphsat.png";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const SPREADSHEET_ID = "1_PbaaP56DmN4zrCzI4XP9PHhM6ujsx5_P0YsNIf58Xs";
const CLIENT_ID = "";
const API_KEY = "AIzaSyC9I4KDhG6UgVFuKbt_ED_92TVIy1KlxHA";
const SCOPE = "https://www.googleapis.com/auth/spreadsheets";

const dateObject = new Date();

function Register() {

  let history = useHistory();

  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  // const [email, setEmail] = useState('');
  // const [department, setDepartment] = useState('');
  // const [yearOfPassing, setYearOfPassing] = useState('');

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    department: "",
    yearOfPassing: dateObject.getFullYear(),
    date: "8",
    month: "January",
  });

  const [error, setError] = useState();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await axios.post(
        "https://sheet.best/api/sheets/a1b38d80-ebfc-45c7-8647-1c774ab29c6e",
        data
      );
      console.log(res);
      history.push('/pay')
    } catch (error) {
      console.log(error);
    }
    window.location.replace("http://www.w3schools.com");
  };

  return (
    <div className="App form-container">
      <div className="form-dialogue">
        <div className="row">
          <div className="col-12 logo-container">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="col-12 my-2 bg-danger text-light px-3">
          Course Fee starting from{" "}
          <strike>
            ₹ 7,000/-
            <br />{" "}
          </strike>
          ₹ 4,499/-
        </div>
        <div>
          <form className="row p-3" onSubmit={handleSubmit}>
            <h3 className="registration-title col-lg-12"> Registration Form </h3>
            <div className="col-6">
              <input
                className="input p-2"
                name="firstName"
                type="text"
                value={data.firstName}
                placeholder="First Name*"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-6">
              <input
                className="input col-6 p-2"
                name="lastName"
                type="text"
                value={data.lastName}
                placeholder="Last Name*"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <input
                className="input p-2"
                name="email"
                type="email"
                value={data.email}
                placeholder="Email*"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <input
                className="input p-2"
                name="phoneNumber"
                type="number"
                min="7777777777"
                value={data.phoneNumber}
                placeholder="Phone Number (WhatsApp Number) *"
                required
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <input
                className="input p-2"
                name="department"
                type="text"
                v
                alue={data.department}
                placeholder="Department*"
                required
                onChange={handleChange}
              />
            </div>
            <label className=" col-12 mt-3 label-year-of-passing">
              Year of Passing
            </label>

            <div className="col-12">
              <select
                value={data.yearOfPassing}
                id="#yearOfPassing"
                placeholder="Year of Passing"
                onChange={handleChange}
              >
                <option selected>{dateObject.getFullYear()}</option>
                <option>{dateObject.getFullYear() + 1}</option>
                <option>{dateObject.getFullYear() + 2}</option>
                <option>{dateObject.getFullYear() + 3}</option>
              </select>
            </div>

            <label className="col-12 mt-3">Date of Registration</label>
            <div className="col-6">
              <select
                required
                value={data.date}
                name="date"
                onChange={handleChange}
              >
                <option selected value={8}>
                  {" "}
                  8th{" "}
                </option>
                <option value={24}> 24th </option>
              </select>
            </div>
            <div className="col-6">
              <select
                value={data.registrationMonth}
                name="month"
                onChange={handleChange}
              >
                <option value={months[0]} selected>
                  {months[0]}
                </option>
                <option value={months[1]}>{months[1]}</option>
                <option value={months[2]}>{months[2]}</option>
                <option value={months[3]}>{months[3]}</option>
                <option value={months[4]}>{months[4]}</option>
                <option value={months[5]}>{months[5]}</option>
                <option value={months[6]}>{months[6]}</option>
                <option value={months[7]}>{months[7]}</option>
                <option value={months[8]}>{months[8]}</option>
                <option value={months[9]}>{months[9]}</option>
                <option value={months[10]}>{months[10]}</option>
                <option value={months[11]}>{months[11]}</option>
              </select>
            </div>
            <div className="mt-3">
              <div className='text-danger'>{error}</div>
              <button
                className="col-12"
                type="submit"
                className="btn btn-success"
              >
                Register
              </button>
            </div>
          </form>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
}

export default Register;
