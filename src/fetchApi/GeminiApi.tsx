
type ApiGeminiType = {
    trip_name: string;
    duration: number;
    budget: string;
    travelers: string;
    location: string;
    days: {
        day: number;
        theme: string;
        plan: {
            time: string;
            place: string;
            coordinates: string;
            description: string;
            place_details: string;
            image_url: string;
            ticket_pricing: string;
            travel_time: string;
        }[];
    }[];
    options_rating: {
        option : string;
        rating: string;
        reason: string;
    } [];
    notes: string;
    additional_info: string;
}

export const ApiGemini: ApiGeminiType = {
    "trip_name": "Dong Nai Budget Couple's Getaway",
    "duration": 3,
    "budget": "cheap",
    "travelers": "Couple",
    "location": "Dong Nai, Vietnam",
    "days": [
      {
        "day": 1,
        "theme": "Nature and Local Flavor",
        "plan": [
          {
            "time": "8:00 AM - 10:00 AM",
            "place": "Buu Long Pagoda",
            "coordinates": "11.0132, 106.8444",
            "description": "A beautiful, serene Buddhist pagoda with stunning architecture and peaceful gardens. Explore the temple, admire the intricate carvings, and soak in the tranquility.",
            "place_details": "Built in 1943, Buu Long Pagoda is one of the largest and most impressive pagodas in Dong Nai province.",
            "image_url": "https://images.unsplash.com/photo-1589099500307-b0c3e717d146?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "Free",
            "travel_time": "30 minutes"
          },
          {
            "time": "10:30 AM - 12:30 PM",
            "place": "Binh Quoi Tourist Village",
            "coordinates": "10.8871, 106.7901",
            "description": "Immerse yourselves in Vietnamese culture at this charming village. Enjoy traditional folk performances, experience local crafts, and savor delicious local cuisine.",
            "place_details": "Offers various activities like fishing, kayaking, and traditional games.",
            "image_url": "https://images.unsplash.com/photo-1569460507362-1091a77c415a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "Around VND 100,000 - VND 200,000 per person",
            "travel_time": "45 minutes"
          },
          {
            "time": "1:00 PM - 2:30 PM",
            "place": "Lunch at a local restaurant",
            "coordinates": "",
            "description": "Indulge in the flavors of Dong Nai with an authentic lunch at a local eatery. Try traditional Vietnamese dishes like Bun Cha, Pho, or Banh Mi.",
            "place_details": "Numerous options available near Binh Quoi Tourist Village.",
            "image_url": "https://images.unsplash.com/photo-1546069901-ba95e59336ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 50,000 - VND 100,000 per person",
            "travel_time": "15 minutes"
          },
          {
            "time": "3:00 PM - 5:00 PM",
            "place": "Trang Tien Waterfall",
            "coordinates": "11.0268, 106.9287",
            "description": "Escape to the serene beauty of this waterfall. Hike through lush greenery, cool off in the refreshing waters, and enjoy the tranquility of nature.",
            "place_details": "Known for its beautiful cascading waters and scenic surroundings.",
            "image_url": "https://images.unsplash.com/photo-1553880657-5c1b3c28a092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "Free",
            "travel_time": "1 hour"
          },
          {
            "time": "5:30 PM - 7:00 PM",
            "place": "Dinner at a local restaurant",
            "coordinates": "",
            "description": "Enjoy another delicious dinner, this time savoring Dong Nai's local seafood specialties.",
            "place_details": "Several restaurants near Trang Tien Waterfall offer a variety of seafood dishes.",
            "image_url": "https://images.unsplash.com/photo-1585539155297-c0456f2820e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 50,000 - VND 100,000 per person",
            "travel_time": "15 minutes"
          }
        ]
      },
      {
        "day": 2,
        "theme": "History and Culture",
        "plan": [
          {
            "time": "8:00 AM - 9:30 AM",
            "place": "Dong Nai Museum",
            "coordinates": "11.0002, 106.8441",
            "description": "Delve into the rich history and culture of Dong Nai province. Explore exhibits showcasing local art, archaeological findings, and historical artifacts.",
            "place_details": "Features collections on the region's history, culture, and natural resources.",
            "image_url": "https://images.unsplash.com/photo-1557672948-153686428c37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 10,000 per person",
            "travel_time": "20 minutes"
          },
          {
            "time": "10:00 AM - 12:00 PM",
            "place": "Long Thanh Cultural Center",
            "coordinates": "11.0483, 106.9687",
            "description": "Immerse yourselves in local art and culture. Visit art galleries, witness traditional performances, and interact with local artisans.",
            "place_details": "Offers various cultural programs and exhibits.",
            "image_url": "https://images.unsplash.com/photo-1503226515210-566d669526f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "Free",
            "travel_time": "30 minutes"
          },
          {
            "time": "12:30 PM - 2:00 PM",
            "place": "Lunch at a local market",
            "coordinates": "",
            "description": "Experience the vibrant atmosphere of a local market and enjoy a budget-friendly lunch. Sample street food vendors or try local specialties at food stalls.",
            "place_details": "Numerous markets in Dong Nai offer a wide variety of local food options.",
            "image_url": "https://images.unsplash.com/photo-1517849845537-4d87e8f09a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 20,000 - VND 50,000 per person",
            "travel_time": "15 minutes"
          },
          {
            "time": "2:30 PM - 4:00 PM",
            "place": "Nha Rong Wharf",
            "coordinates": "10.7805, 106.6982",
            "description": "Step back in time at this historical wharf. Explore the remnants of colonial architecture and learn about the role it played in Vietnam's history.",
            "place_details": "Once a major trading hub and the last departure point of many Vietnamese immigrants.",
            "image_url": "https://images.unsplash.com/photo-1574456671126-454cf48286ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "Free",
            "travel_time": "45 minutes"
          },
          {
            "time": "4:30 PM - 6:00 PM",
            "place": "Relaxing at a local coffee shop",
            "coordinates": "",
            "description": "Enjoy a leisurely afternoon at a cozy local coffee shop. Savor a traditional Vietnamese coffee and unwind after a day of exploring.",
            "place_details": "Numerous charming coffee shops throughout Dong Nai offer a relaxing atmosphere and local coffee.",
            "image_url": "https://images.unsplash.com/photo-1531297303760-d7c544f8366c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 20,000 - VND 40,000 per person",
            "travel_time": "15 minutes"
          },
          {
            "time": "6:30 PM - 8:00 PM",
            "place": "Dinner at a local restaurant",
            "coordinates": "",
            "description": "Enjoy a delicious dinner at a local restaurant specializing in Vietnamese cuisine. Try dishes like Goi Cuon (spring rolls), Banh Xeo (crepes), or Bun Bo Hue (spicy beef noodle soup).",
            "place_details": "Many restaurants near Nha Rong Wharf offer a wide selection of local food options.",
            "image_url": "https://images.unsplash.com/photo-1594757840860-188d87286137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 50,000 - VND 100,000 per person",
            "travel_time": "15 minutes"
          }
        ]
      },
      {
        "day": 3,
        "theme": "Outdoor Adventure and Relaxation",
        "plan": [
          {
            "time": "9:00 AM - 11:00 AM",
            "place": "Suoi Mo Waterfall",
            "coordinates": "11.0058, 106.9645",
            "description": "Embark on a scenic hike through the rainforest to reach this stunning waterfall. Take a dip in the cool, refreshing waters and enjoy the beauty of the surrounding nature.",
            "place_details": "Known for its picturesque setting and the opportunity for swimming and hiking.",
            "image_url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "Free",
            "travel_time": "1 hour"
          },
          {
            "time": "11:30 AM - 1:30 PM",
            "place": "Lunch at a local restaurant",
            "coordinates": "",
            "description": "Enjoy a delicious lunch at a local restaurant near Suoi Mo Waterfall. Indulge in fresh, local ingredients and savor the flavors of Dong Nai cuisine.",
            "place_details": "Several restaurants near the waterfall offer a variety of food options.",
            "image_url": "https://images.unsplash.com/photo-1546069901-ba95e59336ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 50,000 - VND 100,000 per person",
            "travel_time": "15 minutes"
          },
          {
            "time": "2:00 PM - 4:00 PM",
            "place": "Dong Nai River Cruise",
            "coordinates": "",
            "description": "Embark on a relaxing river cruise along the Dong Nai River. Enjoy scenic views of the surrounding landscape and immerse yourselves in the tranquility of the water.",
            "place_details": "Several tour operators offer river cruises with varying durations and prices.",
            "image_url": "https://images.unsplash.com/photo-1501292010252-c2f6e84b71ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 100,000 - VND 200,000 per person",
            "travel_time": "1 hour"
          },
          {
            "time": "4:30 PM - 6:00 PM",
            "place": "Relaxing at a local cafe",
            "coordinates": "",
            "description": "End your Dong Nai adventure with a relaxing evening at a local cafe. Sip on refreshing drinks, enjoy a light snack, and reflect on your memorable experiences.",
            "place_details": "Numerous cafes throughout Dong Nai offer a tranquil setting to unwind.",
            "image_url": "https://images.unsplash.com/photo-1531297303760-d7c544f8366c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 20,000 - VND 40,000 per person",
            "travel_time": "15 minutes"
          },
          {
            "time": "6:30 PM - 8:00 PM",
            "place": "Dinner at a local restaurant",
            "coordinates": "",
            "description": "Enjoy a final delicious dinner, this time trying local specialties from a restaurant near your hotel. You can choose from a variety of cuisines and budget-friendly options.",
            "place_details": "Numerous restaurants near your hotel offer a wide variety of dining options.",
            "image_url": "https://images.unsplash.com/photo-1594757840860-188d87286137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
            "ticket_pricing": "VND 50,000 - VND 100,000 per person",
            "travel_time": "15 minutes"
          }
        ]
      }
    ],
    "options_rating": [
      {
        "option": "Nature and Local Flavor",
        "rating": "5/5",
        "reason": "Offers a balanced combination of outdoor activities, cultural experiences, and delicious food."
      },
      {
        "option": "History and Culture",
        "rating": "4/5",
        "reason": "Provides insight into the rich history and culture of Dong Nai province."
      },
      {
        "option": "Outdoor Adventure and Relaxation",
        "rating": "4/5",
        "reason": "Combines outdoor adventures with relaxing activities, suitable for a couple's getaway."
      }
    ],
    "notes": "This itinerary is based on a cheap budget. Adjust transportation costs based on your chosen mode of transport. Consider bargaining for lower prices at markets and street food stalls. You can customize this itinerary to your preferences and interests.",
    "additional_info": "Consider booking accommodations in advance, especially during peak season. Check for local events and festivals that might be happening during your trip."
  }
  