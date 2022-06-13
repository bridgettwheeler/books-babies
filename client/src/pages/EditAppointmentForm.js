import { useEffect, useState } from "react";
import { useHistory, useParams, Redirect } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";

const EditAppointmentForm = ({ user }) => {
  
  const [errors, setErrors] = useState([])
  const {id} = useParams()
  const history = useHistory()
  const [appointment, setAppointment] = useState({
    date_of_reading: "",
  
  })
 useEffect(() => {
   fetch(`/api/appointments/${id}`)
   .then(resp => resp.json())
   .then(appt => setAppointment({date_of_reading: appt.date_of_reading})) 
 }, [id])
 
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`/api/appointments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment)
    })
      .then(resp => {
        if (resp.ok){
          resp.json().then(()=> history.push("/schedule"))

        } else {
          resp.json().then((error)=> setErrors(error))
        }
        
      })
  }

  const userAppointmentIds = user.appointments.map(app => app.id)

  if (!userAppointmentIds.includes(parseInt(id))) return <Redirect to="/" />

  return (
    <Wrapper>
      <WrapperChild>
        <h1>Edit your reading appointment:</h1>
        <form onSubmit={handleSubmit}>
          
          
          
          
          <FormField>
            <Label htmlFor="date_of_reading">Date</Label>
            <Input
              onChange={ e => setAppointment({...appointment, [e.target.name]: e.target.value})}
              name="date_of_reading"
              type="datetime-local"
              id="date_of_reading"
              value={appointment.date_of_reading}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              Edit Appointment
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
      
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default EditAppointmentForm
