import React from "react";
import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
  const data = useRouteLoaderData("event-details");

  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (!response.ok) {
    //...
  } else {
    return response;
  }
}

export async function deleteAction({ params, request }) {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      {
        message: "Could not be deleted",
      },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
