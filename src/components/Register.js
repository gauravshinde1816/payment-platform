import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import Logo from "../nphsat.png";
import axios from "axios";

// const SPREADSHEET_ID = "1_PbaaP56DmN4zrCzI4XP9PHhM6ujsx5_P0YsNIf58Xs";
// const CLIENT_ID = "";
// const API_KEY = "AIzaSyC9I4KDhG6UgVFuKbt_ED_92TVIy1KlxHA";
// const SCOPE = "https://www.googleapis.com/auth/spreadsheets";


const dateObject = new Date();

function Register() {
  const [billAmount, setBillAmount] = useState("1499");
  const [courseDuration, setCourseDuration] = useState("2 Weeks");
  // const [internship, setInternship] = useState({});
  // const [duration, setDuration] = useState(0);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    department: "",
    yearOfPassing: dateObject.getFullYear(),
    date: "8",
    month: "January",
    duration: "2 weeks",
    internshipTrack: "Track 1",
  });
  const [error, setError] = useState();
  const months = [
    "July",
    "August",
  ];
  const benefits = [
    "Online Instructor-Led Training",
    "Industry Environment",
    "Internship Completion Certificate",
    "Work with Global Team",
    "Career Guidance",
  ];
  const internshipTrack = [
   
    {
      course: "Track 1",
      fees: "1499",
      duration: "2 Weeks",
    },
    {
      course: "Track 2",
      fees: "2499",
      duration: "4 Weeks",
    },
    {
      course: "Track 3",
      fees: "3999",
      duration: "6 Weeks",
    },
    {
      course: "Track 4",
      fees: "5999",
      duration: "8 Weeks",
    },
    {
      course: "Track 5",
      fees: "7999",
      duration: "10 Weeks",
    },
  ];

  useEffect(() => {
    internshipTrack.map((intern) => {
      if (intern.course === data.internshipTrack) {
        setBillAmount(intern.fees);
        setCourseDuration(intern.duration);
      }
    });
  }, [data.internshipTrack]);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {

//     var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

// var options = {
//   amount: 50000,  // amount in the smallest currency unit
//   currency: "INR",
//   receipt: "order_rcptid_11"
// };
// instance.orders.create(options, function(err, order) {
//   console.log(order);
// });

// var options = {
//   "key": "YOUR_KEY_ID", // Enter the Key ID generated from the Dashboard
//   "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//   "currency": "INR",
//   "name": "Acme Corp",
//   "description": "Test Transaction",
//   "image": "https://example.com/your_logo",
//   "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//   "handler": function (response){
//       alert(response.razorpay_payment_id);
//       alert(response.razorpay_order_id);
//       alert(response.razorpay_signature)
//   },
//   "prefill": {
//       "name": "Gaurav Kumar",
//       "email": "gaurav.kumar@example.com",
//       "contact": "9999999999"
//   },
//   "notes": {
//       "address": "Razorpay Corporate Office"
//   },
//   "theme": {
//       "color": "#3399cc"
//   }
// };
// var rzp1 = new Razorpay(options);
// rzp1.on('payment.failed', function (response){
//       alert(response.error.code);
//       alert(response.error.description);
//       alert(response.error.source);
//       alert(response.error.step);
//       alert(response.error.reason);
//       alert(response.error.metadata.order_id);
//       alert(response.error.metadata.payment_id);
// });
// document.getElementById('rzp-button1').onclick = function(e){
//   rzp1.open();
//   e.preventDefault();
// }


  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );
  //   if (!res) {
  //     alert("Razorpay SDK failed to load. Are you online?");
  //     return;
  //   }
  //   const result = await axios.post("http://localhost:8080/payment/orders");
  //   if (!result) {
  //     alert("Server error. Are you online?");
  //     return;
  //   }

  //   const { amount, id: order_id, currency } = result.data;
  //   const options = {
  //     key: "rzp_test_fOPTOz9r6ejQi8", // Enter the Key ID generated from the Dashboard
  //     amount: amount.toString(),
  //     currency: currency,
  //     name: "Soumya Corp.",
  //     description: "Test Transaction",
  //     image: { logo },
  //     order_id: order_id,
  //     handler: async function (response) {
  //       const data = {
  //         orderCreationId: order_id,
  //         razorpayPaymentId: response.razorpay_payment_id,
  //         razorpayOrderId: response.razorpay_order_id,
  //         razorpaySignature: response.razorpay_signature,
  //       };
  //       const result = await axios.post(
  //         "http://localhost:8080/payment/success",
  //         data
  //       );
  //       console.log(result);
  //       alert(result.data.msg);
  //     },
  //     prefill: {
  //       name: "Soumya Dey",
  //       email: "SoumyaDey@example.com",
  //       contact: "9999999999",
  //     },
  //     notes: {
  //       address: "Soumya Dey Corporate Office",
  //     },
  //     theme: {
  //       color: "#61dafb",
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
   }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      displayRazorpay();
      const res = await axios.post(
        "https://sheet.best/api/sheets/a1b38d80-ebfc-45c7-8647-1c774ab29c6e",
        data
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <div className="form-container container">
        <div className="row">
          <div className="col-12">
            <div className="logo-container">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="form-dialogue">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-7 order-2 order-lg-1">
                  <div className="details">
                    <h1>
                      International Remote Internship on Small Satellites
                      (IRIS)- 2021
                    </h1>
                    <h3>Certified Training + Remote Internship</h3>
                  </div>
                  <div className=" benefits-container">
                    <div className="col-12 benefits-head">
                      Remote Internship Program Benefits
                    </div>
                    <ul>
                      {benefits.map((item) => (
                        <li className="col-12">{item}</li>
                      ))}
                    </ul>
                  </div>
                  <h4 className="eligibility col-lg-12" >
                    {" "}
                    Eligibility: All Current Students of Engineering, All Branches
(The fee is Exclusively ONLY for INDIAN Students)
                  </h4>
                </div>
                <div className="col-lg-5 order-1 order-lg-2 mb-3">
                  <div className="row p-3">
                    <div className="notice">
                      <div className="col-lg-12">
                        Course Fee starting from{" "}
                        <strike>
                          ₹ 7,000/-
                          <br />{" "}
                        </strike>
                        ₹ 1,499/-
                      </div>
                    </div>
                  </div>
                  <h3 className="registration-title col-lg-12">
                    {" "}
                    Registration Form{" "}
                  </h3>
                  <div className="row">
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
                        className="input p-2"
                        name="lastName"
                        type="text"
                        value={data.lastName}
                        placeholder="Last Name*"
                        required
                        onChange={handleChange}
                      />
                    </div>
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
                  <div className="row">
                    <div className="col-6">
                      <input
                        className="input p-2"
                        name="phoneNumber"
                        type="tel"
                        max="9999999999"
                        value={data.phoneNumber}
                        placeholder="Phone Number (WhatsApp Number) *"
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-6">
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
                  </div>
                  <label className=" col-12 mt-3 label-year-of-passing">
                    Year of Passing
                  </label>

                  <div className="col-12">
                    <select
                      value={data.yearOfPassing}
                      id="#yearOfPassing"
                      placeholder="Year of Passing"
                      name="yearOfPassing"
                      onChange={handleChange}
                    >
                      <option selected>{dateObject.getFullYear()}</option>
                      <option>{dateObject.getFullYear() + 1}</option>
                      <option>{dateObject.getFullYear() + 2}</option>
                      <option>{dateObject.getFullYear() + 3}</option>
                    </select>
                  </div>
                  <label className="col-12 mt-3">Date of Registration</label>
                  <div className="row">
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
                      </select>
                    </div>
                    <div className="payment-form">
                      <div className="row">
                        <div className="col-6">
                          <label className="col-12" for="internshipTrack">
                            Internship Track
                          </label>
                          <select
                            className="internshipTrack col-12"
                            name="internshipTrack"
                            value={data.internshipTrack}
                            onChange={handleChange}
                          >
                            {internshipTrack.map((internship) => (
                              <option>{internship.course}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-6">
                          <label className="col-12" for="internshipTrack">
                            Duration
                          </label>
                          <select
                            className="col-12"
                            name="duration"
                            value={data.duration}
                            onChange={handleChange}
                          >
                            <option value={2}>{courseDuration}</option>
                          </select>
                        </div>
                      </div>
                      <div className="total-amount-container">
                        Total Amount: INR {billAmount}
                      </div>
                      {/* <button
                        className="btn btn-success rounded-0 col-12"
                        type="submit"
                      >
                        PayNow
                      </button> */}
                      <button id="rzp-button1">Pay</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

