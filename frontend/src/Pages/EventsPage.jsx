import React from "react";
import { NavLink } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Some Another event",
  },
  {
    id: "e3",
    title: "Some Other event",
  },
];

function EventsPage() {
  return (
    <>
      <h1>EventsPage</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <NavLink to={event.id}>{event.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventsPage;
