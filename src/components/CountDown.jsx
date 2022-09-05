import React, { useEffect, useState } from 'react'

const RemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
    months: '00'
}

const CountDown = ({ staticDate, string }) => {

    const date = staticDate

    const [remainingTime, setRemainingTime] = useState(RemainingTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(updateRemainingTime())
        }, 1000)
        return () => clearInterval(intervalId)
    }, []);

    function updateRemainingTime() {
        const newDate = new Date(date)
        const currentDate = new Date()

        const totalSeconds = (newDate - currentDate) / 1000

        const days = Math.floor(totalSeconds / 3600 / 24)
        const hours = Math.floor(totalSeconds / 3600) % 24
        const minutes = Math.floor(totalSeconds / 60) % 60
        const seconds = Math.floor(totalSeconds) % 60

        return {
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
        }
    }

    return (
        <>
            <div className='py-4 text-xl'>{string}</div>
            <div className='max-w-3xl flex flex-wrap justify-center text-center'>
                <TimePart timePart={remainingTime.days}
                    string='Days' />
                <TimePart timePart={remainingTime.hours}
                    string='Hours' />
                <TimePart timePart={remainingTime.minutes}
                    string='Minutes' />
                <TimePart timePart={remainingTime.seconds}
                    string='Seconds' />
            </div>
        </>
    )
}

function TimePart(props) {
    return (
        <div className='flex flex-col px-4 sm:px-6 py-4 sm:py-0'>
            <span className='text-5xl'>{props.timePart}</span>
            <span className='text-xs'>{props.string}</span>
        </div>
    )
}

export default CountDown