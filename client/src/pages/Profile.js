import AppointmentCard from "../components/AppointmentCard";
import { useHistory } from "react-router";

function Profile({user, appointments}) {

    const history = useHistory()

    const handleClick = id => {
        fetch(`api/appointments/${id}`, {
            method: "DELETE",
        }) 
        .then( () => history.push("/"))
            
}
    
  return (
      <div>
          <h2>Your Scheduled Readings:</h2>
          {user.appointments.map(appointment => <AppointmentCard key={appointment.id} user={user} appointment={appointment} handleClick={handleClick}/>)}
           <button>Delete Account</button> 
           <p>Please note, selecting to delete your account will also delete all associated reading appointments.</p>
      </div>
     
  )
}

const style = {
    font_style: "italic",
    font: "arial",
    fontWeight: "normal"
  }

export default Profile;