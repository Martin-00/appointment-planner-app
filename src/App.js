import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
 const [contacts, setContacts] = React.useState([]);
 const [appointments, setAppointments] = React.useState([]);

 const addContact = (name, phone, email) => {
  const newContact = {
    name,
    phone,
    email,
  };
  setContacts(prevContacts => [...prevContacts, newContact]);
};
 
 const addAppointment = (name, phone, email, time) => {
  const newAppointment = {
    name,
    phone,
    email,
    time,
  };
  setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
 }


  /*
  Implement functions to add data to
  contacts and appointments
  */
 
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
      <Route path={ROUTES.CONTACTS} element={<ContactsPage contacts={contacts} addContact={addContact} />} />
      <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment} />} />
    </Route>
  ));
  
  
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
