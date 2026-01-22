import './Timetable.css';
import DayColumn from './DayColumn';

const Timetable = () => {
    const timetableData = [
        {
            day: "Monday",
            date: "Mon",
            classes: [
                {
                    time: "9:30-11:30",
                    subject: "ASE Lecture",
                    type: "lecture",
                    room: "G1102",
                    color: "#8B4513"
                },
                {
                    time: "13:30-15:30",
                    subject: "ASE Practical",
                    type: "practical",
                    room: "A410",
                    color: "#A0522D"
                },
                {
                    time: "15:30-17:30",
                    subject: "IS Practical",
                    type: "practical",
                    room: "A410",
                    color: "#CD853F"
                }
            ]
        },
        {
            day: "Tuesday",
            date: "Tue",
            classes: [
                {
                    time: "9:30-12:30",
                    subject: "PS Lecture",
                    type: "lecture",
                    room: "F502",
                    color: "#8B4513"
                },
                {
                    time: "15:30-17:30",
                    subject: "CSP Practical",
                    type: "practical",
                    room: "A411",
                    color: "#A0522D"
                }
            ]
        },
        {
            day: "Wednesday",
            date: "Wed",
            classes: [
                {
                    time: "9:30-11:30",
                    subject: "PC Practical",
                    type: "practical",
                    room: "A410",
                    color: "#CD853F"
                },
                {
                    time: "12:30-14:30",
                    subject: "GV Practical",
                    type: "practical",
                    room: "A411",
                    color: "#A0522D"
                },
                {
                    time: "14:30-16:30",
                    subject: "PC Lecture",
                    type: "lecture",
                    room: "G602",
                    color: "#8B4513"
                }
            ]
        },
        {
            day: "Thursday",
            date: "Thu",
            classes: [
                {
                    time: "8:30-10:30",
                    subject: "CSP Lecture",
                    type: "lecture",
                    room: "G1102",
                    color: "#8B4513"
                }
            ]
        },
        {
            day: "Friday",
            date: "Fri",
            classes: [
                {
                    time: "8:30-10:30",
                    subject: "GV Lecture",
                    type: "lecture",
                    room: "G1106",
                    color: "#8B4513"
                },
                {
                    time: "11:30-13:30",
                    subject: "IS Lecture",
                    type: "lecture",
                    room: "G1106",
                    color: "#8B4513"
                }
            ]
        }
    ];

    return (
        <div className="timetable">
            <div className="horizontal-grid">
                {timetableData.map((daySchedule, index) => (
                    <DayColumn
                        key={index}
                        day={daySchedule.day}
                        date={daySchedule.date}
                        classes={daySchedule.classes}
                    />
                ))}
            </div>
        </div>
    );
};


export default Timetable;