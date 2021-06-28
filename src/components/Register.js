import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import Logo from "../nphsat.jpeg";
import axios from "axios";
import { GoogleSpreadsheet } from "google-spreadsheet";

const internshipTrack = [
  {
    course: "Track 1",
    fees: "1499",
    duration: "2 Weeks",
    details: {
      modules: [
        "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
      ],
      modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
    },
  },
  {
    course: "Track 2",
    fees: "2499",
    duration: "4 Weeks",
    details: {
      modules: [
        "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
        "All students will learn and design outer body of small satellite using CAD tools (student version or open source). By using this training every student can design and development outer body of any product like smart phone, laptop, iPhone, iPad etc any devide outer body and it's analysis.",
      ],
      modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
    },
  },
  {
    course: "Track 3",
    fees: "3999",
    duration: "6 Weeks",
    details: {
      modules: [
        "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
        "All students will learn and design outer body of small satellite using CAD tools (student version or open source). By using this training every student can design and development outer body of any product like smart phone, laptop, iPhone, iPad etc any devide outer body and it's analysis.",
        "We will give real sample satellite data to every student and it's analysis will be trained by using software tools.",
      ],
      modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
    },
  },
  {
    course: "Track 4",
    fees: "5999",
    duration: "8 Weeks",
    details: {
      modules: [
        "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
        "All students will learn and design outer body of small satellite using CAD tools (student version or open source). By using this training every student can design and development outer body of any product like smart phone, laptop, iPhone, iPad etc any devide outer body and it's analysis.",
        "We will give real sample satellite data to every student and it's analysis will be trained by using software tools.",
        "Satellite data security",
      ],
      modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
    },
  },
  {
    course: "Track 5",
    fees: "7999",
    duration: "10 Weeks",
    details: {
      modules: [
        "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
        "All students will learn and design outer body of small satellite using CAD tools (student version or open source). By using this training every student can design and development outer body of any product like smart phone, laptop, iPhone, iPad etc any devide outer body and it's analysis.",
        "We will give real sample satellite data to every student and it's analysis will be trained by using software tools.",
        "Satellite data security",
        "Solar Panel selection & its analysis",
      ],
      modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
    },
  },
];

const dateObject = new Date();

function Register() {
  const SPREADSHEET_ID = "1epG3Hfc_BT8JFDtBG2IzDaPZO2e_F_cd2kQ5T1JC51M";
  const SHEET_ID = "0";
  const CLIENT_EMAIL = "demo-804@nphsat.iam.gserviceaccount.com";
  const PRIVATE_KEY =
  "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDEC3dVFtE6Zfpb\n6/yn6nD7t7/awUR6ivOUGMlwLeFWDrbemamCf72izpOAPRPiw1j7VrAsbxyNR9PO\nYPHatOLCGaHPau7uY92QaNQSur2eolnA1XU30EowGfCNwIZlm8nm1/iMPSOYTG32\nMyrsLXYDtUmcgf9C2N6tyG7F7d6XvtqtlmBMvcKpq3EvaOrDS05LlYcbviYwcwX6\nEwh21yp57cwPrYeC1kKgkyk3VdQSuiBVPQ96vHp5soPtAI8Mg4o1R1RGq7Y4nWE4\nScZHUEtNbT/XRneSl32l48AU1R5V9KLs/pBQMrqphBMspuomlI+6mGLNh6/kibdy\nB5FafNVFAgMBAAECggEAHleEoiOUbBHsJD2gzopPRJ46sDbuYXr6WlxVvP9/heFk\nII1Zehb0OOujp5rhu4cu0UOoTlA/c9xUkKIE0gE3Vqw/P3TWQwjWJMDHZe4HZV3M\n6gv/huJoFmFwD428dKMee2nHZZ5xe7kEjIYnKVjwkCqxmGqu9l/ODckyNSnCJEEC\ncVyrwFcf/1h6zpwHuh1tOObHGsYQi3plcucARyt+NovQHkzzPh0dtg34NWqxMSPq\n2cEvLvKA0xcpWAZhP5DmeEsTpZFFKyVwElz/Knvk/uLH9/vaxJ2lw7Ie8XR7BDX+\nFlr+IQ5XlOvY+/odkCqeGTuDodeQpRkxnI4iTUlPhwKBgQDsbuepUa4SjAltR9mG\niiWH8WcPV4RxIj6xSCs9ryX/t3vXrTfUpLOdYRwmlyiIM1+i4gXc9EECmdQ/5OYh\nWk8KPhXJ6af2o0UwxebVj2exrR9B0WT1RoXQjCK8ezVh3hERGVXDH0qZQaLh4Cem\njqsxHZYYOKdXX9DDXUmxDymlVwKBgQDURONpBbtgyYNSONl86VFnabdGHMIl2aeg\nis7MDN9w3Phmq7v6mCopog4f1GcG7t5ISfQnBHKuu4mas2Nh49Zd/U3m3z1mcDUS\nks7bHEGJl7IL1Z7gck/c8cdf+dTcMEDClVSZ/S03xfEWP1UoEVazdPXz+oubds6z\nHVeGO2i8wwKBgAM8bV1K6egFFKfzQM3vnB3lNvTlzMFDp7oDc9wPRqTeXQqRq170\ntiSkTJ9WmE5s7ZUsJMpmaXFgq6AIQQIZ21UXjnLKCOt+RpcpTkSEBvZOmUvsUsZs\npa46DMupoAxr3q3uO9dE2V+Jn3IaAFDuSPeOIRzJwbiXbiMOZtDOlVJXAoGAMwn1\nXDVCnr0VVFnTAZPgPOtQZA1aKVuyUInPu4SE3VBkcdttMY4Q5T3QA5tAwowA6oTN\nrewF3zm8lnP3u3va+XKEnrSiwNTODg86qbibkYfmCa5tqy4RQeDovY0Gv4Lir2bU\nlsonazevBlhoE2BH5pKC6Q0fMFxayvqNJvt17Z0CgYEA5uaEvd8WR81Kk82qXS76\n3H76ok/ApBo5b6CcwATgCfPS0QPfveQ3Hqsn9MmgzkmjU1bvPeLF+eOmiY7ym4PC\nim0T86Cu2TOtQd3cvU4JDBNa9lth9Qer6WbfZeVyo8qIhXqMv6ttX3rRFWMJahWp\n0FryVnrRo6/r5klXfCnrOjM=\n-----END PRIVATE KEY-----\n";
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  const [billAmount, setBillAmount] = useState("1499");
  const [courseDuration, setCourseDuration] = useState("2 Weeks");
  const [currentDetails, setCurrentDetails] = useState(
    internshipTrack[0].details
  );
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
  const months = ["July", "August"];
  const benefits = [
    "Online Instructor-Led Training",
    "Industry Environment",
    "Internship Completion Certificate",
    "Work with Global Team",
    "Career Guidance",
  ];

  useEffect(() => {
    internshipTrack.map((intern) => {
      if (intern.course === data.internshipTrack) {
        setBillAmount(intern.fees);
        setData({
          ...data,
          duration: intern.duration,
          internshipTrack: intern.course,
        });
        setCurrentDetails(intern.details);
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
    setError("");
    console.log(data);
    console.log(doc);
    try {
      // displayRazorpay();
      // const res = await axios.post(
      //   "https://sheet.best/api/sheets/a1b38d80-ebfc-45c7-8647-1c774ab29c6e",
      //   data
      // );

      const appendSpreadsheet = async (data) => {
        try {
          await doc.useServiceAccountAuth({
            client_email: CLIENT_EMAIL,
            private_key: PRIVATE_KEY,
          });
          // loads document properties and worksheets
          await doc.loadInfo();

          const sheet = doc.sheetsById[SHEET_ID];
          const result = await sheet.addRow(data);
        } catch (e) {
          console.error("Error: ", e);
        }
      };

      appendSpreadsheet(data);
    } catch (error) {
      setError("An Error Occured");
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
                <div className="col-lg-7 px-4 order-2 order-lg-1">
                  <div className="details">
                    <h1>
                      International Remote Internship on Small Satellites
                      (IRIS)- 2021
                    </h1>
                    <h3>Certified Training + Remote Internship</h3>
                    <div className="description col-lg-12">
                      NPHSAT Internship Deivision is purelly penned to promote
                      academic and industrial research among the Engineering
                      students on Small satellites, RF antennas, Aerospace and
                      Satellite Data Security. This initiative is to give the
                      Industrial experience, contact building, career developing
                      and the interns will be trained by experienced industry
                      professionals and professors from various Universities
                      around World.
                    </div>
                    <div className="eligibility col-lg-12">
                      Eligibility: All Current Students of Engineering, All
                      Branches (The fee is Exclusively ONLY for INDIAN Students)
                    </div>
                    <br/>
                    <div className="eligibility col-lg-12">
                      Refund Policy - After successful enrollment there is no
                      option for refund, but students can postpone the dates of
                      joining.
                    </div>
                  </div>
                  <div className=" track-details-container">
                    <div className="col-12 track-head">
                      {data.internshipTrack}
                    </div>
                    <div>
                      {currentDetails.modules.map((item, i) => {
                        return (
                          <div>
                            <div className="module-head">
                              {" "}
                              Module {(" ", i + 1)}{" "}
                            </div>
                            <div className="module-detail"> {item} </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="track-duration">
                      Timings: {currentDetails.modeAndTiming[0]}{" "}
                    </div>
                    <div className="track-platform">
                      Mode: {currentDetails.modeAndTiming[1]}{" "}
                    </div>
                  </div>
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

                  <div className="col-12">
                    <input
                      className="input p-2"
                      name="collegeName"
                      type="text"
                      value={data.phoneNumber}
                      placeholder="College Name*"
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
                          8th
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
                        {months.map((month) => {
                          return <option value={month}>{month}</option>;
                        })}
                      </select>
                    </div>
                    <div className="payment-form">
                      {/* <div className="row"> */}
                      {/* <div className="col-6"> */}
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
                      {/* </div> */}
                      {/* <div className="col-6"> */}
                      <label className="col-12" for="internshipTrack">
                        Duration
                      </label>
                      <select
                        className="col-12"
                        name="duration"
                        value={data.duration}
                        onChange={handleChange}
                      >
                        <option value={data.duration}>{data.duration}</option>
                      </select>
                      {/* </div> */}
                      {/* </div> */}
                      <div className="total-amount-container">
                        Total Amount: INR {billAmount}
                      </div>
                      {/* <button
                        className="btn btn-success rounded-0 col-12"
                        type="submit"
                      >
                        PayNow
                      </button> */}
                      <span className="col-12 text-danger"> {error} </span>
                      <button
                        className="btn btn-success col-12"
                        id="rzp-button1"
                        type="submit"
                      >
                        Pay
                      </button>

                      <div className=" benefits-container mb-3">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

// const details = [
//   {
//     duration: "2 Weeks",
//     details: {
//       modules: [
//         "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
//       ],
//       modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
//     },
//   },
//   {
//     duration: "4 Weeks",
//     details: {
//       modules: [
//         "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
//         "All students will learn and design outer body of small satellite using CAD tools (student version or open source). By using this training every student can design and development outer body of any product like smart phone, laptop, iPhone, iPad etc any devide outer body and it's analysis.",
//       ],
//       modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
//     },
//   },
//   {
//     duration: "6 Weeks",
//     details: {
//       modules: [
//         "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
//         "All students will learn and design outer body of small satellite using CAD tools (student version or open source). By using this training every student can design and development outer body of any product like smart phone, laptop, iPhone, iPad etc any devide outer body and it's analysis.",
//         "We will give real sample satellite data to every student and it's analysis will be trained by using software tools.",
//       ],
//       modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
//     },
//   },
//   {
//     duration: "8 Weeks",
//     details: {
//       modules: [
//         "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
//         "All students will learn and design outer body of small satellite using CAD tools (student version or open source). By using this training every student can design and development outer body of any product like smart phone, laptop, iPhone, iPad etc any devide outer body and it's analysis.",
//         "We will give real sample satellite data to every student and it's analysis will be trained by using software tools.",
//         "Satellite data security",
//       ],
//       modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
//     },
//   },
//   {
//     duration: "10 Weeks",
//     details: {
//       modules: [
//         "Students will learn and design antenna for small satellite communication application using industry software (Student versions or Open Source). At the end of this module every student will be able to design their own antenna for the required satellite specifications.",
//         "All students will learn and design outer body of small satellite using CAD tools (student version or open source). By using this training every student can design and development outer body of any product like smart phone, laptop, iPhone, iPad etc any devide outer body and it's analysis.",
//         "We will give real sample satellite data to every student and it's analysis will be trained by using software tools.",
//         "Satellite data security",
//         "Solar Panel selection & its analysis",
//       ],
//       modeAndTiming: ["Monday to Friday 5 PM to 6 PM", "Google Meet"],
//     },
//   },
// ];
