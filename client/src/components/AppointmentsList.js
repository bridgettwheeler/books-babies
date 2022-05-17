import AppointmentCard from "./AppointmentCard";

const AppointmentsList = ({appointments}) => {
  const renderAppointments = () => {
      return (
        <div>
        {appointments.map(appointment => <AppointmentCard key={appointment.id} appointment={appointment} setAppointments={setAppointments}/>)}
        </div>  
      )
  }
            
  return (
      <div>{renderAppointments()}</div>
  )
}

export default AppointmentsList;
