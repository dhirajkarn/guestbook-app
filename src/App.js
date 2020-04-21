import React, { useState, useEffect } from 'react';
import { GuestList } from './components/GuestList/GuestList'
import { AddGuestForm } from './components/AddGuestForm/AddGuestForm'

export const App = () => {
  // const guestData = [
  //   {
  //     id: 1,
  //     name: "Manish Das",
  //     street: "Kirkland",
  //     city: "Seattle",
  //     state: "Washington",
  //     zip: "12345",
  //     phone: "555-555-1234"
  //   }
  // ]

  const [myguests, setGuests] = useState([])
  // const mapGuest = myguests.map(guest => guest.name)
  // console.log(mapGuest)
  
  useEffect(() => {
      setGuests([
        {
          id: 2,
          name: "Dheeraj Karn",
          street: "NIT PATNA",
          city: "Patna",
          state: "Bihar",
          zip: "12345",
          phone: "829-853-8380"
        }
      ]);
  }, [])

  console.log(myguests.length)

  const addGuest = (guest) => {
        guest.id = myguests.length + 1
        setGuests({...myguests, guest})
  }

  console.log(myguests.length)

  // const guests = myguests.map(item => <GuestList key={item.id} guest={item} />)

  return (
    <div className="container">
      <h1>My Guestbook</h1>
      <div className="row">
        <div className="col">
          <h2>Please Sign In</h2>
          <AddGuestForm addGuest={addGuest} />
        </div>
        <div className="col">
          <h2>Guest Details</h2>
          <GuestList guests={myguests} />
        </div>
      </div>
    </div>
  );
}

