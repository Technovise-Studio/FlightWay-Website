import React from "react";
import { useState } from "react";
import GroupFlightPopUp from "./GroupFlightPopUp";
import { FaUser } from "react-icons/fa";

const GroupFlightScreen: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/Images/Logo.png" alt="Logo" className="h-10 w-40 mr-2" />
          </div>

          <nav className="flex-1 text-center space-x-6">
            <a
              href="#"
              className="text-green-900 font-extrabold hover:text-green-600"
            >
              Group Flights
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Visa
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Umrah
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600">
              Tracking
            </a>
          </nav>

          <div className="flex items-center">
            <button className="flex items-center bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
              <FaUser className="mr-2" />
              Login
            </button>
          </div>
        </div>
      </header>

      {/* MAIN Starts   */}

      <main className="p-8 bg-white">
        <div className="relative bg-yellow-200 rounded-full p-6 flex flex-col items-center space-y-4 mx-auto max-w-3xl">
          <div className="flex justify-between w-full px-4">
            <div className="flex items-center space-x-4">
              <span className="bg-green-700 text-2xl text-white font-extrabold py-4 px-10 rounded-md h-14 w-50 flex items-center pr-[-20px]">
                Get Great Deals
              </span>
            </div>

            <span className="bg-green-700 text-2xl text-white font-extrabold py-4 px-6 rounded-md h-14 ml-[20px]">
              Limited Time Offer
            </span>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src="/Images/LeftImage.png"
              alt="Left Image"
              className="w-40 h-60 rounded-lg object-cover mr-4"
            />
            <img
              src="/Images/centerImage.png"
              alt="Center Image"
              className="w-46 h-64 rounded-lg object-cover border-4 border-white shadow-lg absolute z-10 transform -translate-y-8"
            />
            <img
              src="/Images/rightImage.png"
              alt="Right Image"
              className="w-40 h-60 rounded-lg object-cover ml-4"
            />
          </div>
        </div>
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-4 mt-[33px] ml-[320px]">
          <p className="text-green-800 font-extrabold text-3xl">
            Find Low<br></br> Prices
          </p>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-4 mr-[280px]">
          <p className="text-green-800 font-extrabold text-3xl text-right pl-[-30px]">
            Immediate<br></br>Booking<br></br>Confirmation
          </p>
        </div>

        <div className="mt-6 flex justify-center w-full h-[70px] mt-[60px]">
          <div className="bg-green-700 text-white py-3 px-6 rounded-l-lg font-bold w-full text-center">
            All<br></br> Flights
          </div>
          <div className="bg-white text-green-800 py-3 px-6 border border-green-700 w-full text-center">
            KSA <br></br> Flights
          </div>
          <div className="bg-white text-green-800 py-3 px-6 border border-green-700 w-full text-center">
            UAE <br></br> Flights
          </div>
          <div className="bg-white text-green-800 py-3 px-6 border border-green-700 w-full text-center">
            UK <br></br> Flights
          </div>
          <div className="bg-white text-green-800 py-3 px-6 border border-green-700 rounded-r-lg w-full text-center">
            Umrah <br></br> Flights
          </div>
        </div>

        {/* Oneway Flight Section Start */}
        <div
          className="relative bg-cover bg-center rounded-lg mt-[30px] h-[300px]"
          style={{ backgroundImage: "url('/Images/plane.png')" }}
        >
          <div className="bg-black bg-opacity-40 rounded-lg p-10 h-full flex flex-col justify-center">
            <h2 className="text-white text-3xl font-bold text-center mb-6">
              Oneway Flights
            </h2>

            <div className="flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <label className="text-white text-lg font-semibold">
                  Flight From
                </label>
                <input
                  type="text"
                  placeholder="Select Departure Place"
                  className="mt-2 bg-white text-gray-700 py-3 px-6 rounded-full w-72 text-center shadow-lg"
                />
              </div>

              <div className="flex flex-col items-center">
                <label className="text-white text-lg font-semibold">
                  Flight To
                </label>
                <input
                  type="text"
                  placeholder="Select Arrival Place"
                  className="mt-2 bg-white text-gray-700 py-3 px-6 rounded-full w-72 text-center shadow-lg"
                />
              </div>

              <div className="flex flex-col items-center">
                <label className="text-white text-lg font-semibold">Date</label>
                <input
                  type="date"
                  placeholder="Select Departure Date"
                  className="mt-2 bg-white text-gray-700 py-3 px-6 rounded-full w-72 text-center shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card Section Start */}

        <div className="flex space-x-4 p-6">
          {/* Card 1 */}
          <div className="flex flex-col w-1/2 border rounded-lg p-4 shadow-md border-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/Images/icon1.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />
                <h3 className="text-lg font-bold">Turkish Airlines</h3>
              </div>
              <span className="text-green-600 font-semibold">Outbound</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">LHE</p>
                <p className="text-gray-500">Oct 06</p>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/Images/icon2.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
                <span className="text-sm font-medium">04:30 PM</span>
                <span className="text-gray-300">— — — — — — — —</span>
                <span className="text-sm font-medium">06:30 PM</span>
                <img
                  src="/Images/icon3.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">RUH</p>
                <p className="text-gray-500">Oct 06</p>
              </div>
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Direct Flight
            </p>
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
                    <p className="text-green-700 font-bold">20 KG (1 Piece)</p>
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

              <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg">
                88,000/- PKR
              </button>
            </div>
          </div>

          {/* Card 02 */}
          <div className="flex flex-col w-1/2 border rounded-lg p-4 shadow-md border-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/Images/icon1.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />{" "}
                <h3 className="text-lg font-bold">Turkish Airlines</h3>
              </div>
              <span className="text-green-600 font-semibold">Outbound</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">LHE</p>
                <p className="text-gray-500">Oct 06</p>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/Images/icon2.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
                <span className="text-sm font-medium">04:30 PM</span>
                <span className="text-gray-300">— — — — — — — —</span>
                <span className="text-sm font-medium">06:30 PM</span>
                <img
                  src="/Images/icon3.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">RUH</p>
                <p className="text-gray-500">Oct 06</p>
              </div>
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Direct Flight
            </p>
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
                    <p className="text-green-700 font-bold">20 KG (1 Piece)</p>
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

              <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg">
                88,000/- PKR
              </button>
            </div>
          </div>
        </div>

        {/* Card Section End */}

        <div className="flex space-x-4 p-6">
          {/* Card 03 */}
          <div className="flex flex-col w-1/2 border rounded-lg p-4 shadow-md border-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/Images/icon1.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />
                <h3 className="text-lg font-bold">Turkish Airlines</h3>
              </div>
              <span className="text-green-600 font-semibold">Outbound</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">LHE</p>
                <p className="text-gray-500">Oct 06</p>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/Images/icon2.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
                <span className="text-sm font-medium">04:30 PM</span>
                <span className="text-gray-300">— — — — — — — —</span>
                <span className="text-sm font-medium">06:30 PM</span>
                <img
                  src="/Images/icon3.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">RUH</p>
                <p className="text-gray-500">Oct 06</p>
              </div>
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Direct Flight
            </p>
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
                    <p className="text-green-700 font-bold">20 KG (1 Piece)</p>
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

              <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg">
                88,000/- PKR
              </button>
            </div>
          </div>

          {/* Card 04 */}
          <div className="flex flex-col w-1/2 border rounded-lg p-4 shadow-md border-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/Images/icon1.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />{" "}
                <h3 className="text-lg font-bold">Turkish Airlines</h3>
              </div>
              <span className="text-green-600 font-semibold">Outbound</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">LHE</p>
                <p className="text-gray-500">Oct 06</p>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/Images/icon2.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
                <span className="text-sm font-medium">04:30 PM</span>
                <span className="text-gray-300">— — — — — — — —</span>
                <span className="text-sm font-medium">06:30 PM</span>
                <img
                  src="/Images/icon3.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">RUH</p>
                <p className="text-gray-500">Oct 06</p>
              </div>
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Direct Flight
            </p>
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
                    <p className="text-green-700 font-bold">20 KG (1 Piece)</p>
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

              <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg">
                88,000/- PKR
              </button>
            </div>
          </div>
        </div>

        {/* Card Section End */}

        <div className="flex space-x-4 p-6">
          {/* Card 5 */}
          <div className="flex flex-col w-1/2 border rounded-lg p-4 shadow-md border-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/Images/icon1.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />
                <h3 className="text-lg font-bold">Turkish Airlines</h3>
              </div>
              <span className="text-green-600 font-semibold">Outbound</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">LHE</p>
                <p className="text-gray-500">Oct 06</p>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/Images/icon2.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
                <span className="text-sm font-medium">04:30 PM</span>
                <span className="text-gray-300">— — — — — — — —</span>
                <span className="text-sm font-medium">06:30 PM</span>
                <img
                  src="/Images/icon3.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">RUH</p>
                <p className="text-gray-500">Oct 06</p>
              </div>
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Direct Flight
            </p>
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
                    <p className="text-green-700 font-bold">20 KG (1 Piece)</p>
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

              <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg">
                88,000/- PKR
              </button>
            </div>
          </div>

          {/* Card 06 */}
          <div className="flex flex-col w-1/2 border rounded-lg p-4 shadow-md border-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/Images/icon1.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />{" "}
                <h3 className="text-lg font-bold">Turkish Airlines</h3>
              </div>
              <span className="text-green-600 font-semibold">Outbound</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">LHE</p>
                <p className="text-gray-500">Oct 06</p>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/Images/icon2.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
                <span className="text-sm font-medium">04:30 PM</span>
                <span className="text-gray-300">— — — — — — — —</span>
                <span className="text-sm font-medium">06:30 PM</span>
                <img
                  src="/Images/icon3.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">RUH</p>
                <p className="text-gray-500">Oct 06</p>
              </div>
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Direct Flight
            </p>
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
                    <p className="text-green-700 font-bold">20 KG (1 Piece)</p>
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

              <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg">
                88,000/- PKR
              </button>
            </div>
          </div>
        </div>

        {/* Card Section End */}

        <div className="flex space-x-4 p-6">
          {/* Card 7 */}
          <div className="flex flex-col w-1/2 border rounded-lg p-4 shadow-md border-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/Images/icon1.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />
                <h3 className="text-lg font-bold">Turkish Airlines</h3>
              </div>
              <span className="text-green-600 font-semibold">Outbound</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">LHE</p>
                <p className="text-gray-500">Oct 06</p>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/Images/icon2.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
                <span className="text-sm font-medium">04:30 PM</span>
                <span className="text-gray-300">— — — — — — — —</span>
                <span className="text-sm font-medium">06:30 PM</span>
                <img
                  src="/Images/icon3.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">RUH</p>
                <p className="text-gray-500">Oct 06</p>
              </div>
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Direct Flight
            </p>
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
                    <p className="text-green-700 font-bold">20 KG (1 Piece)</p>
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

              <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg">
                88,000/- PKR
              </button>
            </div>
          </div>

          {/* Card 08 */}
          <div className="flex flex-col w-1/2 border rounded-lg p-4 shadow-md border-black">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <img
                  src="/Images/icon1.png"
                  alt="Logo"
                  className="w-8 h-8 rounded-full"
                />{" "}
                <h3 className="text-lg font-bold">Turkish Airlines</h3>
              </div>
              <span className="text-green-600 font-semibold">Outbound</span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-center">
                <p className="text-2xl font-bold">LHE</p>
                <p className="text-gray-500">Oct 06</p>
              </div>

              <div className="flex items-center space-x-1">
                <img
                  src="/Images/icon2.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
                <span className="text-sm font-medium">04:30 PM</span>
                <span className="text-gray-300">— — — — — — — —</span>
                <span className="text-sm font-medium">06:30 PM</span>
                <img
                  src="/Images/icon3.png"
                  alt="Plane Icon"
                  className="w-8 h-8"
                />
              </div>

              <div className="text-center">
                <p className="text-2xl font-bold">RUH</p>
                <p className="text-gray-500">Oct 06</p>
              </div>
            </div>

            <p className="text-center mt-2 text-sm text-gray-500">
              Direct Flight
            </p>
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
                    <p className="text-green-700 font-bold">20 KG (1 Piece)</p>
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

              <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-full text-lg">
                88,000/- PKR
              </button>
            </div>
          </div>
        </div>
        {/* Card Section End */}

        {/* Customize Section Start */}
        <div className="flex items-center justify-between w-full bg-orange-100 rounded-lg p-6 my-4">
          <div className="flex items-center space-x-4">
            <img src="/Images/icon7.png" alt="Icon" className="w-12 h-12" />
            <div>
              <p className="text-black-600">Now you can</p>
              <p className="text-2xl font-bold">
                CUSTOMIZE YOUR{" "}
                <span className="text-green-700">GROUP FLIGHT</span>
              </p>
            </div>
          </div>
          <button
           onClick={openModal}
           className="bg-green-700 text-white font-semibold py-2 px-6 rounded-lg text-lg">
            Request your group
          </button>
        </div>
        {/* Customize Section End */}
        {/* Modal Pop-Up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg relative w-[900px] mx-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <GroupFlightPopUp />
          </div>
        </div>
      )}


        {/* Term and Condition Section start */}
        <div className="bg-white-100 border border-black rounded-lg p-6 my-4">
          <div className="bg-green-700 text-white text-xl font-bold p-3 rounded-t-lg">
            Terms and Conditions
          </div>

          <div className="text-gray-800 text-sm leading-6 p-4">
            <ul className="list-disc list-inside space-y-4">
              <li>
                Each person traveling to a foreign location has to have a valid
                visa and an ok-to-board permit. Yugo Private Limited will not be
                liable for denied boarding or any deportee expenses, including
                but not restricted to fines, claims, notices, or demands made
                against the passenger by any immigration authorities at the
                destination or by third parties for any deportee, including
                transit passengers, resulting from any rejection by the
                immigration authorities at the destination upon the passenger's
                arrival.
              </li>
              <li>
                When making the reservation, passengers must supply their
                contact information (phone number and email address). Tickets
                are non-refundable and non-changeable; seats are subject to
                availability.
              </li>
              <li>
                Please note that if payment is to be made in a currency other
                than Pakistani Rupee, the fee(s) will be calculated according to
                the current exchange rate.
              </li>
              <li>
                Any modification in the total number of seats or flight numbers
                may result in a revision of the rates.
              </li>
              <li>
                Flight ways maintains the right, subject to market necessity, to
                change or modify the terms and conditions of this policy as
                needed.
              </li>
            </ul>
          </div>
        </div>
        {/* Term and Condition Section End */}

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

        {/* 2nd Last Footer Section Start */}
        <div className="bg-green-800 rounded-lg p-8 mx-4 md:mx-0 my-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h2 className="text-white font-extrabold text-3xl">
              Subscribe to get
              <br /> Awesome Discount
            </h2>
            <div className="flex flex-col items-center md:items-start space-y-2 w-full md:w-1/2">
              <input
                type="email"
                placeholder="Please provide your email address"
                className="bg-white text-gray-700 px-4 py-2 rounded-md w-full md:w-full lg:w-[80%] focus:outline-none"
              />
              <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded-md hover:bg-yellow-600 mt-2 w-full md:w-auto lg:w-[20%] ml-[200px]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* 2nd Last Footer Section End */}

        {/*Last Footer Section Start */}
        <div className="bg-white-100 text-black py-12 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
    
    <div className="flex flex-col items-center md:items-start">
      <img src="/Images/Logo.png" alt="Logo" className="h-12 mb-4" />
      <p className="text-black-400 text-center md:text-left max-w-xs">
        Flight Way is Pakistan’s trusted travel agency, offering seamless bookings for flights, domestic tours, visas, Umrah packages, honeymoon trips, hotels, and travel insurance.
      </p>
    </div>
    
    <div>
      <h3 className="font-bold text-lg mb-4">Company</h3>
      <ul className="space-y-2 text-black-400 cursor-pointer">
        <li>Contact Us</li>
        <li>Privacy Policy</li>
        <li>Terms and Conditions</li>
        <li>Career</li>
      </ul>
    </div>

    <div>
      <h3 className="font-bold text-lg mb-4">Contact Us</h3>
      <ul className="space-y-2 text-black-400 curosr-pointer">
        <li>3070A, Giga Mall, Islamabad</li>
        <li>+(92) 304 111 0636</li>
        <li>support@flightway.pk</li>
      </ul>
    </div>
  </div>
  
  <div className="mt-8 text-center text-black-400">
    Copyright © 2024 <span className="text-green-600">Flight Way.</span> All Rights Reserved.
  </div>
</div>
    {/*Last Footer Section End */}
      </main>

      {/* MAIN ends   */}
    </div>
  );
};

export default GroupFlightScreen;
