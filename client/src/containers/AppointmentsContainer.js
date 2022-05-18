import React, { useEffect, useState } from "react";
import AppointmentsList from "../components/AppointmentsList";


const AppointmentsContainer = ({user}) => {
    const [appointments, setAppointments] = useState([])

    useEffect(() => {   
            fetch("/api/appointments")
            .then(resp => resp.json())
            .then(data => {
                setAppointments(data)
              })
      }, []);

      const handleClick = id => {
        fetch(`api/appointments/${id}`, {
            method: "DELETE",
        })     
            setAppointments(currentAppointments => currentAppointments.filter(appointmentObj=> appointmentObj.id !== id))
}

  return (
    <div>
        <AppointmentsList user={user} appointments={appointments} handleClick={handleClick}/>
    </div>
  )
}

export default AppointmentsContainer
