import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function AppointmentList({ user }) {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/api/appointments")
      .then((r) => r.json())
      .then(setAppointments);
  }, []);

  

  return (
    <Wrapper>
      {appointmentss.length > 0 ? (
        appointments.map((appointment) => (
          <Appointment key={appointment.id}>
            <Box>
              <h2>{appointment.date_of_reading}</h2>
              <p>
              <h3>Reader: {user.user_name}</h3>
              <h3>Book: {book.title}</h3>
              <h3>By: {book.author}</h3>
              <h3> {book.image_url}</h3>
              <h3> {book.summary}</h3>
              </p>
            </Box>
          </Appointment>
        ))
      ) : (
        <>
          <h2>No Appointments Found</h2>
          <Button as={Link} to="/new">
            Volunteer to Read
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Appointment = styled.article`
  margin-bottom: 24px;
`;

export default AppointmentList;
