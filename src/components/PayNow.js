import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import Logo from "../nphsat.png";
// import "./App.css";
import axios from "axios";

function App() {
  const [billAmount, setBillAmount] = useState("4999");
  const [internship, setInternship] = useState({});
  const [duration, setDuration] = useState(0);

  const benefits = [
    "Remote Internships Benefits",
    "Remote Internships Benefits",
    "Remote Internships Benefits",
    "Remote Internships Benefits",
    "Remote Internships Benefits",
    "Remote Internships Benefits",
    "Remote Internships Benefits",
  ];

  useEffect(() => {
    internshipTrack.map((intern) => {
      if (intern.course === internship) {
        setBillAmount(intern.fees);
      }
    });
  }, [internship]);

  const internshipTrack = [
    {
      course: "AI & ML",
      fees: "2500",
    },
    {
      course: "Web development",
      fees: "1500",
    },
    {
      course: "Cyber Security",
      fees: "3500",
    },
    {
      course: "Data Science",
      fees: "5500",
    },
  ];

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
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    const result = await axios.post("http://localhost:8080/payment/orders");
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: "rzp_test_fOPTOz9r6ejQi8", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      image: { logo },
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:8080/payment/success",
          data
        );
        console.log(result);

        alert(result.data.msg);
      },
      prefill: {
        name: "Soumya Dey",
        email: "SoumyaDey@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Soumya Dey Corporate Office",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <div className="App">
      <div className="container payment">
        <div className="row">
          <div className="col-12 logo-container">
            <img src={Logo} alt="" />
          </div>
          <div className="col-lg-6">
            <div className="payment-form">
              <h1>Payment Registration</h1>
              <label className="col-12" for="internshipTrack">
                Internship Track
              </label>
              <select
                className="internshipTrack col-12"
                name="internshipTrack"
                value={internship}
                onChange={(e) => setInternship(e.target.value)}
              >
                {internshipTrack.map((internship) => (
                  <option value={internship.course}>{internship.course}</option>
                ))}
              </select>

              <label className="col-12" for="internshipTrack">
                Duration
              </label>
              <select
                className="col-12"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value={3}>3 months</option>
                <option value={6}>6 months</option>
                <option value={12}>12 months</option>
              </select>
              <div className="total-amount-container">
                Total Amount: INR {billAmount}
              </div>
              <div
                className="btn btn-success rounded-0 col-12"
                onClick={displayRazorpay}
              >
                PayNow
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row p-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
