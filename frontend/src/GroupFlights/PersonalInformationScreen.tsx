import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import flightwayLogo from "../../public/Images/Logo.png";

const PersonalInformationScreen: React.FC = () => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(1);
  const [infantCount, setInfantCount] = useState(1);

  const increment = (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setCount(count + 1);
  };

  const decrement = (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white">
      <header className="w-full bg-white py-4 px-8 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img src="/Images/Logo.png" alt="Logo" className="h-10 w-40 mr-2" />
        </div>
        <nav className="hidden md:flex space-x-8 text-gray-600">
          <a href="#" className="text-green-700 font-semibold">
            Group Flights
          </a>
          <a href="#" className="hover:text-gray-900">
            Visa
          </a>
          <a href="#" className="hover:text-gray-900">
            Umrah
          </a>
          <a href="#" className="hover:text-gray-900">
            Services
          </a>
          <a href="#" className="hover:text-gray-900">
            Tracking
          </a>
        </nav>
        <button className="bg-green-700 text-white flex items-center space-x-2 px-4 py-2 rounded-full hover:bg-green-800">
          <FaSignInAlt />
          <span>Login</span>
        </button>
      </header>

      <div className="flex justify-between items-center w-full max-w-4xl px-8 mt-6">
        <div className="text-left ml-[-200px]">
          <h2 className="text-4xl font-extrabold text-gray-900">LHE - RUH</h2>
          <p className="text-green-800 font-bold">Flight No. | Oct 01, 2024</p>
        </div>
        <div className="text-right mr-[-200px]">
          <p className="text-black text-2xl">Booking will be expired in</p>
          <p className="text-red-600 font-bold text-2xl mr-10">15:00 minutes</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full max-w-6xl px-8 mt-8 bg-gray-200 rounded-lg p-4">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border-4 border-green-800 bg-white"></div>
          <p className="text-xs mt-1 text-black-600">Personal Details</p>
        </div>
        <div className="flex-1 border-t border-dashed border-gray-500 mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border-4 border-black bg-white"></div>
          <p className="text-xs mt-1 text-black-600">Passengers Detail</p>
        </div>
        <div className="flex-1 border-t border-dashed border-gray-500 mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border-4 border-black bg-white"></div>
          <p className="text-xs mt-1 text-black-600">Payment</p>
        </div>
        <div className="flex-1 border-t border-dashed border-gray-500 mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border-4 border-black bg-white"></div>
          <p className="text-xs mt-1 text-black-600">E Ticket</p>
        </div>
      </div>

      {/* Personal Info Section Start */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl border border-black mt-20">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4 ml-[400px]">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-gray-600 font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-1">
              <FaUser className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your Full Name"
                className="outline-none flex-1 text-gray-700"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-600 font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-1">
              <FaEnvelope className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your Email Address"
                className="outline-none flex-1 text-gray-700"
              />
            </div>
          </div>

          <div>
            <label className="text-gray-600 font-medium">
              Mobile No <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border border-gray-300 rounded px-3 py-2 mt-1">
              <FaPhone className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Enter your contact number"
                className="outline-none flex-1 text-gray-700"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="text-center">
            <label className="text-gray-600 font-medium">
              Adult <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-center mt-2 border border-black rounded-lg overflow-hidden w-40 ml-[90px]">
              <button
                onClick={() => decrement(adultCount, setAdultCount)}
                className="bg-green-700 text-white py-4 w-1/3 text-center"
              >
                -
              </button>
              <span className="flex-1 bg-gray-100 text-lg font-semibold py-3 text-center">
                {adultCount.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => increment(adultCount, setAdultCount)}
                className="bg-green-700 text-white py-4 w-1/3 text-center"
              >
                +
              </button>
            </div>
          </div>

          <div className="text-center">
            <label className="text-gray-600 font-medium">
              Children (2-11 Years)
            </label>
            <div className="flex items-center justify-center mt-2 border border-black rounded-lg overflow-hidden w-40 ml-[95px]">
              <button
                onClick={() => decrement(childCount, setChildCount)}
                className="bg-green-700 text-white py-4 w-1/3 text-center"
              >
                -
              </button>
              <span className="flex-1 bg-gray-100 text-lg font-semibold py-3 text-center">
                {childCount.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => increment(childCount, setChildCount)}
                className="bg-green-700 text-white py-4 w-1/3 text-center"
              >
                +
              </button>
            </div>
          </div>

          <div className="text-center">
            <label className="text-gray-600 font-medium">
              Infants (0-23 Months)
            </label>
            <div className="flex items-center justify-center mt-2 border border-black rounded-lg overflow-hidden w-40 ml-[95px]">
              <button
                onClick={() => decrement(infantCount, setInfantCount)}
                className="bg-green-700 text-white py-4 w-1/3 text-center"
              >
                -
              </button>
              <span className="flex-1 bg-gray-100 text-lg font-semibold py-3 text-center">
                {infantCount.toString().padStart(2, "0")}
              </span>
              <button
                onClick={() => increment(infantCount, setInfantCount)}
                className="bg-green-700 text-white py-4 w-1/3 text-center"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded mt-6">
          <div className="flex items-center">
            <img
              src="/Images/icon1.png"
              alt="Airline Logo"
              className="mr-2 h-10 w-10"
            />
            <span className="font-extrabold text-black text-2xl">
              Turkish Airlines
            </span>
          </div>
          <p className="text-black text-lg mt-2">LHE - RUH</p>
          <p className="text-black text-lg font-bold ml-[870px] mt-[-50px]">
            Flight No: XYZ-123
          </p>
          <p className="text-black text-lg mt-8">Adult * 1</p>
          <p className="text-black text-lg ml-[890px] mt-[-40px]">
            86,000/- PKR
          </p>
          <p className="text-black text-lg mt-[20px] font-bold">Total</p>
          <p className="text-black font-bold text-lg ml-[890px] mt-[-30px]">
            86,000/- PKR
          </p>
        </div>

        <button className="w-[170px] bg-green-700 text-white font-semibold py-2 rounded mt-6 hover:bg-green-700 ml-[470px]">
          Book Online
        </button>
      </div>
      {/* Personal Info Section End */}

      {/* Featured In Section Start */}
      <div className="my-8">
        <h2 className="text-center text-black font-bold text-2xl mb-6">
          Featured In
        </h2>
        <div className="flex justify-center space-x-8">
          <div className="text-center">
            <img
              src="/Images/icon8.png"
              alt="Feature 1"
              className="h-30 w-40"
            />
            <p className="text-gray-600 text-sm mt-2">
              Pakistan International<br></br>Airlines
            </p>
          </div>
          <div className="text-center">
            <img
              src="/Images/icon9.png"
              alt="Feature 2"
              className="h-30 w-40 mx-auto"
            />
            <p className="text-gray-600 text-sm mt-8">Emirates</p>
          </div>
          <div className="text-center">
            <img
              src="/Images/icon10.png"
              alt="Feature 3"
              className="h-30 w-40 mx-auto mt-[-18px]"
            />
            <p className="text-gray-600 text-sm mt-2">Qatar Airways</p>
          </div>
          <div className="text-center">
            <img
              src="/Images/icon11.png"
              alt="Feature 4"
              className="h-30 w-40 mx-auto"
            />
            <p className="text-gray-600 text-sm mt-9">Saudi Airlines</p>
          </div>
          <div className="text-center">
            <img
              src="/Images/icon12.png"
              alt="Feature 5"
              className="h-30 w-40 mx-auto"
            />
            <p className="text-gray-600 text-sm mt-9">Turkish Airlines</p>
          </div>
          <div className="text-center">
            <img
              src="/Images/icon13.png"
              alt="Feature 6"
              className="h-30 w-40 mx-auto"
            />
            <p className="text-gray-600 text-sm mt-5">Etihad Airways</p>
          </div>
        </div>
      </div>
      {/* Featured In Section End */}

      {/* Our office Section Start */}
      <div className="my-8">
        <h2 className="text-center text-black font-bold text-2xl mb-6">
          Our Offices
        </h2>

        <div className="flex justify-center space-x-40">
          <div className="text-center">
            <img
              src="/Images/icon14.png"
              alt="Office 1"
              className="h-60 w-60 mx-auto rounded-md"
            />
            <p className="text-gray-600 text-sm mt-2">Islamabad</p>
          </div>
          <div className="text-center">
            <img
              src="/Images/icon15.png"
              alt="Office 2"
              className="h-60 w-60 mx-auto rounded-md"
            />
            <p className="text-gray-600 text-sm mt-2">Peshawar</p>
          </div>
          <div className="text-center">
            <img
              src="/Images/icon16.png"
              alt="Office 3"
              className="h-60 w-60 mx-auto rounded-md"
            />
            <p className="text-gray-600 text-sm mt-2">Swat</p>
          </div>
        </div>
      </div>
      {/* Our Office Section End */}

      {/* Last part Start */}
      <footer className="bg-white py-8 text-center border-t border-gray-300">
        <div className="bg-green-700 py-6 rounded-lg mx-4 mb-8 w-[1360px]">
          <h2 className="text-white font-bold text-2xl mb-4">
            Subscribe to get Awesome discount
          </h2>
          <div className="flex justify-center items-center space-x-2">
            <input
              type="email"
              placeholder="Please provide your email address"
              className="px-4 py-2 rounded-lg text-gray-700 w-64 focus:outline-none"
            />
            <button className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-start px-8">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <img
              src={flightwayLogo}
              alt="Flightway Logo"
              className="h-12 mb-4"
            />
            <p className="text-gray-600">
              Flight Way is Pakistan’s trusted travel agency,<br></br> offering
              seamless bookings for flights, domestic<br></br> tours, visas,
              Umrah packages, honeymoon trips,<br></br> hotels, and travel
              insurance.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-2">Company</h3>
            <ul className="text-gray-600 space-y-1">
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
            <p className="text-gray-600">3070A, Giga Mall, Islamabad</p>
            <p className="text-gray-600">+ (92) 304 111 0636</p>
            <p className="text-gray-600">support@flightway.pk</p>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500">
          <p>
            Copyright © 2024{" "}
            <span className="text-green-700 font-semibold">Flightway</span>. All
            Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalInformationScreen;
