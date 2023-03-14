import React, { useReducer }from 'react'
import BookingForm from '../components/BookingForm/BookingForm'
import Subheader from '../components/Subheader/Subheader'

const updateTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const initializeTimes = () => {
    const initialTime = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    return initialTime;
}

const Reservation = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  return (
    <>
        <BookingForm availableTimes={ availableTimes } dispatch={dispatch}/>
        <Subheader />
    </>
  )
}

export default Reservation