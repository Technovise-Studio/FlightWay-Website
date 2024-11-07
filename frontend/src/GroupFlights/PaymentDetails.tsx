import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import airlineLogo from "../../public/Images/icon1.png";
import { useState } from "react";
import flightwayLogo from '../../public/Images/Logo.png';

const PaymentDetails: React.FC = () => {
  const [selectedMethod, setSelectedMethod] = useState<string>("");

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
  };

  return (
    <>
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
        <div className="text-left ml-[100px]">
          <h2 className="text-4xl font-extrabold text-gray-900">LHE - RUH</h2>
          <p className="text-green-800 font-bold">Flight No. | Oct 01, 2024</p>
        </div>
        <div className="text-right mr-[-550px]">
          <p className="text-black text-2xl">Booking will be expired in</p>
          <p className="text-red-600 font-bold text-2xl mr-10">15:00 minutes</p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full max-w-6xl px-8 mt-8 bg-gray-200 rounded-lg p-4 ml-[180px]">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <p className="text-xs mt-1 text-black-600">Personal Details</p>
        </div>

        <div className="flex-1 border-t border-dashed border-gray-500 mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full bg-green-800 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
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

      {/* Turkish Airline Section Start */}
      <div className="bg-[#FEB704] p-4 rounded-lg flex justify-between items-center mb-4 shadow-md w-[1150px] ml-[180px] mt-5">
        <div className="flex items-center space-x-4">
          <img
            src={airlineLogo}
            alt="Turkish Airlines Logo"
            className="w-10 h-10 rounded-full mt-[-60px]"
          />
          <div>
            <h3 className="font-semibold text-lg">Turkish Airlines</h3>
            <p className="text-gray-700">LHE - RUH</p>
            <p className="text-gray-700">Adult * 2</p>
            <p className="font-semibold">Total</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-gray-700">Flight No: XYZ-123</p>
          <p className="text-gray-700">2 * 86,000/- PKR</p>
          <p className="font-bold text-xl">172,000/- PKR</p>
        </div>
      </div>
      {/* Turkish Airline Section End*/}

      {/* Payment Method Start */}
      <div className="flex flex-col items-center space-y-4 ml-[-810px]">
        <h2 className="text-3xl font-bold ml-[900px]">Payment Methods</h2>
        <div className="space-y-2">
          <div
            onClick={() => handleSelect("pay_later")}
            className={`flex items-center justify-between w-80 p-4 rounded-lg cursor-pointer ${
              selectedMethod === "pay_later" ? "bg-[#FEB704]" : "bg-[#FEB704]"
            }`}
          >
            <img src="/Images/icon24.png" alt="Pay Later" className="w-6 h-6" />
            <span className="flex-1 text-center font-medium">Pay Later</span>
            <span
              className={`w-5 h-5 rounded-full border-2 ${
                selectedMethod === "pay_later"
                  ? "border-green-600 bg-green-600"
                  : "border-gray-400"
              }`}
            />
          </div>

          <div
            onClick={() => handleSelect("bank_transfer")}
            className={`flex items-center justify-between w-80 p-4 rounded-lg cursor-pointer ${
              selectedMethod === "bank_transfer"
                ? "bg-[#FEB704]"
                : "bg-[#FEB704]"
            }`}
          >
            <img
              src="/Images/icon25.png"
              alt="Bank Transfer"
              className="w-6 h-6"
            />
            <span className="flex-1 text-center font-medium">
              Bank Transfer
            </span>
            <span
              className={`w-5 h-5 rounded-full border-2 ${
                selectedMethod === "bank_transfer"
                  ? "border-green-600 bg-green-600"
                  : "border-gray-400"
              }`}
            />
          </div>

          <div
            onClick={() => handleSelect("debit_credit")}
            className={`flex items-center justify-between w-80 p-4 rounded-lg cursor-pointer ${
              selectedMethod === "debit_credit"
                ? "bg-[#FEB704]"
                : "bg-[#FEB704]"
            }`}
          >
            <img
              src="/Images/icon26.png"
              alt="Debit / Credit Card"
              className="w-6 h-6"
            />
            <span className="flex-1 text-center font-medium">
              Debit / Credit Card
            </span>
            <span
              className={`w-5 h-5 rounded-full border-2 ${
                selectedMethod === "debit_credit"
                  ? "border-green-600 bg-green-600"
                  : "border-gray-400"
              }`}
            />
          </div>
        </div>

        <button
          className="w-80 p-4 mt-4 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700"
          onClick={() => alert(`Selected payment method: ${selectedMethod}`)}
        >
          Submit
        </button>
      </div>
      {/* Payment Method End */}

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
      {/* Subscription Section */}
      <div className="bg-green-700 py-6 rounded-lg mx-4 mb-8">
        <h2 className="text-white font-bold text-2xl mb-4">Subscribe to get Awesome discount</h2>
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

      {/* Information Section */}
      <div className="flex flex-col md:flex-row justify-around items-start px-8">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <img src={flightwayLogo} alt="Flightway Logo" className="h-12 mb-4" />
          <p className="text-gray-600">
            Flight Way is Pakistan’s trusted travel agency,<br></br> offering seamless bookings for flights, domestic<br></br> tours, visas,
            Umrah packages, honeymoon trips,<br></br> hotels, and travel insurance.
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

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500">
        <p>Copyright © 2024 <span className="text-green-700 font-semibold">Flightway</span>. All Rights Reserved</p>
      </div>
    </footer>
        {/* Last part End */}

    </>
  );
};

export default PaymentDetails;
