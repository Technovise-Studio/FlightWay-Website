import React, { useState } from "react";

const GroupFlightPopUp: React.FC = () => {
 
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    passengers: "",
    details: "",
  });

  const [errors, setErrors] = useState({
    fullName: false,
    mobileNo: false,
    email: false,
    passengers: false,
    details: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = {
      fullName: !formData.fullName,
      mobileNo: !formData.mobileNo,
      email: !formData.email,
      passengers: !formData.passengers,
      details: !formData.details,
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      setShowSuccess(true);
    }
  };

  const closePopup = () => {
    setShowSuccess(false);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md border-4 border-green-700 w-[800px] mx-auto">
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-md text-center w-[400px] border-4 border-green-700">
            <h2 className="text-green-700 font-bold text-2xl mb-4">Success Message</h2>
            <p className="text-gray-700 mb-6">
              You have successfully applied for the application. Your status is on hold. Access the tracking page for more details.
            </p>
            <button
              onClick={closePopup}
              className="bg-green-700 text-white font-semibold py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-800"
            >
              Sure
            </button>
          </div>
        </div>
      )}

      <h2 className="text-center text-green-700 font-extrabold text-2xl">
        CUSTOMIZED GROUP FLIGHTS
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-6">
        You want to request for the customized group flights. Please complete
        the form and our sales team will contact you soon.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          <div>
            <label className="block text-gray-700 font-semibold">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className={`flex items-center border-2 rounded-md px-3 py-2 ${errors.fullName ? "border-red-500" : "border-green-700"}`}>
              <img src="/Images/icon17.png" alt="Full Name Icon" className="w-5 h-5 mr-2" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your Full Name"
                className="w-full outline-none text-gray-700"
              />
            </div>
            {errors.fullName && <p className="text-red-500 italic text-sm">*Enter Full Name</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">
              Mobile No <span className="text-red-500">*</span>
            </label>
            <div className={`flex items-center border-2 rounded-md px-3 py-2 ${errors.mobileNo ? "border-red-500" : "border-green-700"}`}>
              <img src="/Images/icon18.png" alt="Mobile Icon" className="w-5 h-5 mr-2" />
              <input
                type="text"
                name="mobileNo"
                value={formData.mobileNo}
                onChange={handleInputChange}
                placeholder="Enter your contact number"
                className="w-full outline-none text-gray-700"
              />
            </div>
            {errors.mobileNo && <p className="text-red-500 italic text-sm">*Enter Mobile Number</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className={`flex items-center border-2 rounded-md px-3 py-2 ${errors.email ? "border-red-500" : "border-green-700"}`}>
              <img src="/Images/icon19.png" alt="Email Icon" className="w-5 h-5 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your Email Address"
                className="w-full outline-none text-gray-700"
              />
            </div>
            {errors.email && <p className="text-red-500 italic text-sm">*Enter Email Address</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">
              No of Passengers <span className="text-red-500">*</span>
            </label>
            <div className={`flex items-center border-2 rounded-md px-3 py-2 ${errors.passengers ? "border-red-500" : "border-green-700"}`}>
              <img src="/Images/icon20.png" alt="Passengers Icon" className="w-5 h-5 mr-2" />
              <input
                type="number"
                name="passengers"
                value={formData.passengers}
                onChange={handleInputChange}
                min="10"
                placeholder="Enter the value of 10 or above"
                className="w-full outline-none text-gray-700"
              />
            </div>
            {errors.passengers && <p className="text-red-500 italic text-sm">*Enter No of Passengers</p>}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold">
            Please give the flight details with dates <span className="text-red-500">*</span>
          </label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleInputChange}
            placeholder="Enter flight details"
            className={`w-full h-24 border-2 rounded-md p-3 outline-none text-gray-700 ${errors.details ? "border-red-500" : "border-green-700"}`}
            required
          ></textarea>
          {errors.details && <p className="text-red-500 italic text-sm">*Enter Flight Details</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-green-700 text-white font-semibold py-2 px-6 rounded-lg text-lg shadow-md hover:bg-green-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GroupFlightPopUp;
