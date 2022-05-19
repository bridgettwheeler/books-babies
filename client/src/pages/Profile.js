import AppointmentsContainer from "../containers/AppointmentsContainer";

function Profile({user, appointments}) {
    
  return (
      <div>
          <h1>YOUR SCHEDULED READINGS:</h1>
          {/* {appointments.map(appointment => appointment.user.id === user.id ? <AppointmentsContainer key={appointment.id} user={user} />  : "You have no scheduled readings.")} */}
           <button>Delete Account</button> 
      </div>
     
  )
}

const style = {
    font_style: "italic",
    font: "arial",
    fontWeight: "normal"
  }

export default Profile;