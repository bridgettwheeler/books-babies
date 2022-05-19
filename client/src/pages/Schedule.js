import AppointmentsContainer from "../containers/AppointmentsContainer";

const Schedule = ({user}) => {
    
    return (
        <div style={style}>
            <h1>Schedule:</h1>
            <AppointmentsContainer user={user}/>

        </div>
            
    
    )
}

const style = {
   
  }


export default Schedule;