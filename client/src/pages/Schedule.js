import AppointmentsContainer from "../containers/AppointmentsContainer";

const Schedule = ({user}) => {
    
    return (
        <div>
            <h1>Schedule:</h1>
            <AppointmentsContainer user={user}/>

        </div>
            
    
    )
}

export default Schedule;