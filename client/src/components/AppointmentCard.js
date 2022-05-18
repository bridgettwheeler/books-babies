import React, { useEffect, useState } from "react";

const AppointmentCard = ({appointment, user, handleClick}) => {
    
    
    

    // need a handle click that patches to edit appointment

    
    return (
        <div>
            <h1>{appointment.date_of_reading}</h1>
            <h2>{appointment.user.username}</h2>
            <h2>{appointment.book.title}</h2>
            <h2>{appointment.book.author}</h2>
            <h2>{appointment.book.book_image}</h2>
            <h2>{appointment.book.summary}</h2>
            {appointment.user.id === user.id ?<button onClick={() => handleClick(appointment.id)}>Delete Appointment</button> : null}
            {/* <button onClick={handleClick}>Edit Appointment</button> */}
        </div>
    )
}
  

export default AppointmentCard;