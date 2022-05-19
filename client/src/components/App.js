import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "../pages/Login";
import NewAppointment from "../pages/NewAppointment";
import Schedule from "../pages/Schedule";
import Profile from "../pages/Profile";
import EditAppointmentForm from "../pages/EditAppointmentForm";

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
          <Route path="/appointments/:id/edit">
            <EditAppointmentForm user={user} />
          </Route>
          <Route path="/new">
            <NewAppointment user={user} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route path="/">
            <Schedule user={user}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
