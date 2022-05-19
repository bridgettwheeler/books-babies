import React, { useEffect, useState } from "react";

const AppointmentCard = ({appointment, user, handleClick}) => {
    
    
    

    // need a handle click that patches to edit appointment

    
    return (
        <div>
            <h2>{appointment.date_of_reading}</h2>
            <h3>Reader: {appointment.user.username}</h3>
            <h3>Book: {appointment.book.title}</h3>
            <h3>Author: {appointment.book.author}</h3>
            <h3>{appointment.book.book_image}</h3>
            <h3 style={style}>{appointment.book.summary}</h3>
            {appointment.user.id === user.id ?<button onClick={() => handleClick(appointment.id)}>Delete Appointment</button> : null}
            {/* <button onClick={handleClick}>Edit Appointment</button> */}
            <br></br>
        </div>
    )
}

const style = {
    fontStyle: "italic",
    font: "arial",
    fontWeight: "normal"
  }

const fields = {
    fontStyle: "normal",
    font: "arial",
    fontWeight: "normal"

}
  

export default AppointmentCard;