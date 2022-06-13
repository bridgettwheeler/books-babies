import AppointmentCard from "../components/AppointmentCard";
import { useHistory } from "react-router";
import {useEffect} from "react";
import BookCard from "../components/BookCard";

function Profile({user, setUser, appointments}) {

    const history = useHistory()

    useEffect(() => {
        // auto-login
        fetch("/api/me").then((r) => {
          if (r.ok) {
            r.json().then((user) => setUser(user));
          }
        });
      }, [setUser]);

    const handleClick = () => {
        fetch(`api/users/${user.id}`, {
            method: "DELETE",
        }) 
        .then( () => history.push("/"))
            
}
    
  return (
      <div>
          <h2>Your Scheduled Readings:</h2>
          {user.appointments.map(appointment => <AppointmentCard key={appointment.id} user={user} appointment={appointment} handleClick={handleClick}/>)}
            <h2>Your books </h2>
            {user.books.map(book => <BookCard key={book.id} user={user} book={book}/>)}
           <button onClick={handleClick}>Delete Account</button> 
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