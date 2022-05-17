

const AppointmentCard = () => {
    const [appointments, setAppointments] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("/api/appointments")
                const data = await resp.json()
                setAppointments(data)
            } catch (error) {
                alert(error)
            }
        }
      fetchData()
},[]);


    const handleClick = e => {
        const fetchData = async () => {
            const resp = await fetch("api/appointments/:id", {
                method: "DELETE",
            })     
                const data = await resp.json()
                setAppointments(currentAppointments => currentAppointments.filter(appointmentObj=> appointmentObj.id !== appointment.id))
    }
      fetchData()
    };

    // need a handle click that patches to edit appointment

    
    return (
        <div>
            <h1>{appointment.date_of_reading}</h1>
            <h2>{appointment.user.username}</h2>
            <h2>{appointment.book.title}</h2>
            <h2>{appointment.book.author}</h2>
            <h2>{appointment.book.book_image}</h2>
            <h2>{appointment.book.summary}</h2>
            <button onClick={handleClick}>Delete Appointment</button>
            {/* <button onClick={handleClick}>Edit Appointment</button> */}
        </div>
    )
}
  

export default AppointmentCard