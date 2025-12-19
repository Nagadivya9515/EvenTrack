
import React from "react";
import { useParams } from "react-router-dom";
import EventTemplate from "../components/EventTemplate";
import eventData from "../data/eventData";
import { Link } from "react-router-dom";
export default function EventDetails() {
  const { eventType } = useParams();

  const event = eventData[eventType];

  return (
    <div className="bg-gray-100 min-h-screen"> 
      <EventTemplate event={event} />
    </div>
  );
}
