import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import flightwayLogo from "../../public/Images/Logo.png";

const TicketDetails: React.FC = () => {
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
          <p className="text-xs mt-1 text-black-600">Payment</p>
        </div>

        <div className="flex-1 border-t border-dashed border-gray-500 mx-2"></div>

        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border-4 border-black bg-white"></div>
          <p className="text-xs mt-1 text-black-600">E Ticket</p>
        </div>
      </div>

      {/* next section start */}
      <div className="p-4 space-y-4 bg-white-100 rounded-lg">
        <div className="flex justify-between items-center bg-gray-200 p-4 rounded-lg h-[120px]">
          <div className="flex flex-col">
            <span className="text-green-700 font-extrabold text-2xl">
              Order ID
            </span>
            <span className="text-black text-lg">12345677890</span>
          </div>
          <div className="flex flex-col">
            <span className="text-green-700 font-extrabold text-2xl">PNR</span>
            <span className="text-black text-lg">12345677890</span>
          </div>
          <button className="px-8 py-2 text-white bg-red-500 rounded-lg">
            Hold
          </button>
        </div>

        <div className="flex flex-col bg-gray-200 p-4 rounded-lg shadow-md space-y-4 w-[1000px]">
          <div className="flex items-center space-x-4">
            <img
              src="/Images/icon1.png"
              alt="Airline Logo"
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold">Turkish Airlines</span>
          </div>

          <div className="bg-white p-4 rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <button className="px-6 py-2 text-white bg-green-800 rounded-3xl">
                  Outbound
                </button>
                <span className="block text-2xl font-extrabold mt-2">LHE</span>
                <span className="text-green-500">Lahore</span>
              </div>

              <div className="text-center text-gray-500">
                <span className="text-black">2 Hours</span>
                <div className="flex items-center space-x-8">
                  <div className="h-5 w-5 bg-black rounded-full" />
                  <div className="w-[600px] border-t border-dashed border-black" />
                  <div className="h-5 w-5 bg-black rounded-full" />
                </div>
                <span className="text-black">Direct Flight</span>
              </div>

              <div className="text-center">
                <span className="block text-2xl font-extrabold mt-5">RUH</span>
                <span className="text-green-500">Riyadh</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-center">
                <span className="block text-green-800 font-bold text-lg">
                  04:30 PM
                </span>
                <span className="text-black-500">Oct 06, 2024</span>
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <img
                      src="/Images/icon4.png"
                      alt="Baggage Icon"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="text-gray-500">Baggage</p>
                      <p className="text-green-700 font-bold">07 KG</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/Images/icon5.png"
                      alt="Check-in Icon"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="text-gray-500">Check In Bags</p>
                      <p className="text-green-700 font-bold">
                        20 KG (1 Piece)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img
                      src="/Images/icon6.png"
                      alt="Meal Icon"
                      className="w-10 h-10"
                    />
                    <div>
                      <p className="text-gray-500">Meal</p>
                      <p className="text-green-700 font-bold">Included</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <span className="block text-green-800 font-bold text-lg">
                  06:30 PM
                </span>
                <span className="text-black-500">Oct 06, 2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Summary Section */}
        <div>
          <div className="flex justify-center mt-4 ml-[1050px] mt-[-310px]">
            <div className="bg-gray-200 p-6 rounded-lg w-[400px] space-y-4">
              <h2 className="text-2xl font-extrabold text-center">
                Price Summary
              </h2>

              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span className="text-black font-extrabold">Name</span>
                  <span className="text-black">Lorem Ipsum</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black font-extrabold">Price</span>
                  <span className="text-black">82,000/- PKR</span>
                </div>
              </div>
              <div className="space-y-2">
                <button className="w-full px-4 py-2 text-white bg-red-500 rounded-lg">
                  Cancel Booking
                </button>
                <button className="w-full px-4 py-2 text-white bg-green-600 rounded-lg">
                  Download Ticket
                </button>
              </div>

              <div className="flex justify-center items-center space-x-2">
                <input type="checkbox" className="form-checkbox" />
                <span>With Fare</span>
              </div>
            </div>
          </div>
        </div>
        {/* Passenger Details Section */}
        <div className="bg-gray-200 p-4 rounded-lg mt-[20px]">
          <span className="text-2xl font-extrabold text-green-800">
            Passenger Details
          </span>
          <div className="flex justify-between mt-2 text-gray-700">
            <span className="text-black">Passenger Name</span>
            <span className="text-black">Flight ID</span>
            <span className="text-black">Adult</span>
          </div>
        </div>
      </div>
      {/* next section end */}

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
        <div className="bg-green-700 py-6 rounded-lg mx-4 mb-8">
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
      {/* Last part End */}
    </>
  );
};

export default TicketDetails;
