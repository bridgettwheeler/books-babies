import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import AppointmentList from "../pages/AppointmentList";
import NewAppointment from "../pages/NewAppointment";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/api/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Switch>
          <Route path="/new">
            <NewAppointment user={user} />
          </Route>
          <Route path="/">
            <AppointmentList />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
