import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupFlightScreen from "./GroupFlights/GroupFlightScreen";
import GroupFlightPopUp from "./GroupFlights/GroupFlightPopUp";
import PersonalInformationScreen from "./GroupFlights/PersonalInformationScreen";
import PassengerDetails from "./GroupFlights/PassengerDetails";
import PaymentDetails from "./GroupFlights/PaymentDetails";
import TicketDetails from "./GroupFlights/TicketDetails";
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GroupFlightScreen />} />
        <Route path="/pop-up" element={<GroupFlightPopUp />} />
        <Route path="/personal-info" element={<PersonalInformationScreen />} />
        <Route path="/passenger-detail" element={<PassengerDetails />} />
        <Route path="/payment-detail" element={<PaymentDetails />} />
        <Route path="/ticket-detail" element={<TicketDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
