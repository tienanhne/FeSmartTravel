// src/pages/GeneratePlace.tsx
import React from 'react';
import { ApiGemini } from '../../fetchApi/GeminiApi';
import IMG4 from "../../assets/places/place4.jpg";


interface Plan {
  time: string;
  place: string;
  coordinates: string;
  description: string;
  place_details: string;
  image_url: string;
  ticket_pricing: string;
  travel_time: string;
}

interface Day {
  day: number;
  theme: string;
  plan: Plan[];
}

interface Itinerary {
  trip_name: string;
  duration: number;
  budget: string;
  travelers: string;
  location: string;
  days: Day[];
  options_rating: {
    option: string;
    rating: string;
    reason: string;
  }[];
}

const GeneratePlace: React.FC = () => {
  const itinerary: Itinerary = ApiGemini;
  
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{itinerary.trip_name}</h1>
      <p className="text-lg mb-2"><strong>Duration:</strong> {itinerary.duration} days</p>
      <p className="text-lg mb-2"><strong>Budget:</strong> {itinerary.budget}</p>
      <p className="text-lg mb-2"><strong>Travelers:</strong> {itinerary.travelers}</p>
      <p className="text-lg mb-4"><strong>Location:</strong> {itinerary.location}</p>
      
      {itinerary.days.map((day) => (
        <div key={day.day} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Day {day.day}: {day.theme}</h2>
          {day.plan.map((plan, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{plan.time}</h3>
              <h4 className="text-lg font-semibold mb-2">{plan.place}</h4>
              <img src={IMG4} alt={plan.place} className="w-full h-64 object-cover rounded-lg mb-2" />
              <p className="mb-2">{plan.description}</p>
              <p className="mb-2"><strong>Details:</strong> {plan.place_details}</p>
              <p className="mb-2"><strong>Ticket Pricing:</strong> {plan.ticket_pricing}</p>
              <p><strong>Travel Time:</strong> {plan.travel_time}</p>
            </div>
          ))}
        </div>
      ))}
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Options Rating</h2>
        {itinerary.options_rating.map((rating, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg mb-4 shadow-md">
            <h3 className="text-xl font-semibold mb-2">{rating.option}</h3>
            <p className="mb-2"><strong>Rating:</strong> {rating.rating}</p>
            <p><strong>Reason:</strong> {rating.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneratePlace;
