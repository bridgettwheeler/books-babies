import AppointmentCard from "./AppointmentCard";

const AppointmentsList = ({appointments, user, handleClick}) => {
  const renderAppointments = () => {
      return (
        <div>
        {appointments.map(appointment => <AppointmentCard key={appointment.id} appointment={appointment} user={user} handleClick={handleClick}/>)}
        </div>  
      )
  }
            
  return (
      <div>{renderAppointments()}</div>
  )
}

export default AppointmentsList;
