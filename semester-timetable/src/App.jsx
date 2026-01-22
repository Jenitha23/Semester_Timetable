import { useState } from 'react';
import './App.css';

function App() {
    const [activeDay, setActiveDay] = useState('Monday');

    const timetableData = {
        Monday: [
            {
                time: "9:30 AM - 11:30 AM",
                subject: "Advanced Software Engineering (ASE)",
                type: "lecture",
                room: "G1102 Floor",
                duration: "2 hours",
                building: "G Block, 1st Floor"
            },
            {
                time: "1:30 PM - 3:30 PM",
                subject: "ASE Practical",
                type: "practical",
                room: "A410",
                duration: "2 hours",
                building: "A Block, 4th Floor"
            },
            {
                time: "3:30 PM - 5:30 PM",
                subject: "Information Security (IS) Practical",
                type: "practical",
                room: "A410",
                duration: "2 hours",
                building: "A Block, 4th Floor"
            }
        ],
        Tuesday: [
            {
                time: "9:30 AM - 12:30 PM",
                subject: "Professional Skills (PS) Lecture",
                type: "lecture",
                room: "F502",
                duration: "3 hours",
                building: "F Block, 5th Floor"
            },
            {
                time: "3:30 PM - 5:30 PM",
                subject: "Case Study Project (CSP) Practical",
                type: "practical",
                room: "A411",
                duration: "2 hours",
                building: "A Block, 4th Floor"
            }
        ],
        Wednesday: [
            {
                time: "9:30 AM - 11:30 AM",
                subject: "Parallel Computing (PC) Practical",
                type: "practical",
                room: "A410",
                duration: "2 hours",
                building: "A Block, 4th Floor"
            },
            {
                time: "12:30 PM - 2:30 PM",
                subject: "Graphics & Visualization (GV) Practical",
                type: "practical",
                room: "A411",
                duration: "2 hours",
                building: "A Block, 4th Floor"
            },
            {
                time: "2:30 PM - 4:30 PM",
                subject: "Parallel Computing (PC) Lecture",
                type: "lecture",
                room: "G602",
                duration: "2 hours",
                building: "G Block, 6th Floor"
            }
        ],
        Thursday: [
            {
                time: "8:30 AM - 10:30 AM",
                subject: "Case Study Project (CSP) Lecture",
                type: "lecture",
                room: "G1102",
                duration: "2 hours",
                building: "G Block, 1st Floor"
            }
        ],
        Friday: [
            {
                time: "8:30 AM - 10:30 AM",
                subject: "Graphics & Visualization (GV) Lecture",
                type: "lecture",
                room: "G1106",
                duration: "2 hours",
                building: "G Block, 1st Floor"
            },
            {
                time: "11:30 AM - 1:30 PM",
                subject: "Information Security (IS) Lecture",
                type: "lecture",
                room: "G1106",
                duration: "2 hours",
                building: "G Block, 1st Floor"
            }
        ]
    };

    const getDayClasses = (day) => {
        return timetableData[day] || [];
    };

    const ClassItem = ({ cls }) => (
        <div className="class-item" style={{
            background: '#fff8f0',
            borderRadius: '15px',
            padding: '25px',
            borderLeft: '6px solid',
            borderLeftColor: cls.type === 'lecture' ? '#8B4513' : '#D2691E',
            boxShadow: '0 6px 20px rgba(139, 69, 19, 0.1)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '20px',
                flexWrap: 'wrap',
                gap: '15px'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    flexWrap: 'wrap'
                }}>
          <span style={{
              background: cls.type === 'lecture' ? '#8B4513' : '#D2691E',
              color: 'white',
              padding: '8px 18px',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '700',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
          }}>
            {cls.type === 'lecture' ? '🎓 Lecture' : '💻 Practical'}
          </span>
                    <span style={{
                        background: '#ffe4c4',
                        color: '#8B4513',
                        padding: '8px 18px',
                        borderRadius: '25px',
                        fontSize: '1rem',
                        fontWeight: '700',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
            ⏱️ {cls.duration}
          </span>
                </div>
                <div style={{
                    background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                    color: 'white',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 4px 12px rgba(139, 69, 19, 0.2)'
                }}>
                    <span style={{ fontSize: '1.2rem' }}>🕐</span>
                    {cls.time}
                </div>
            </div>

            <h3 style={{
                color: '#654321',
                fontSize: '1.6rem',
                marginBottom: '20px',
                fontWeight: '800',
                lineHeight: '1.4'
            }}>
                {cls.subject}
            </h3>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap'
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: 'rgba(222, 184, 135, 0.2)',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(222, 184, 135, 0.3)'
                }}>
                    <span style={{ fontSize: '1.3rem' }}>📍</span>
                    <div>
                        <div style={{
                            color: '#8B4513',
                            fontWeight: '700',
                            fontSize: '1.1rem'
                        }}>
                            Room {cls.room}
                        </div>
                        <div style={{
                            color: '#A0522D',
                            fontSize: '0.9rem',
                            marginTop: '4px'
                        }}>
                            {cls.building}
                        </div>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    background: cls.type === 'lecture' ? 'rgba(139, 69, 19, 0.1)' : 'rgba(210, 105, 30, 0.1)'
                }}>
          <span style={{
              fontSize: '1.3rem',
              color: cls.type === 'lecture' ? '#8B4513' : '#D2691E'
          }}>
            {cls.type === 'lecture' ? '📖' : '⚙️'}
          </span>
                    <span style={{
                        color: cls.type === 'lecture' ? '#8B4513' : '#D2691E',
                        fontWeight: '700',
                        fontSize: '1rem'
                    }}>
            {cls.type === 'lecture' ? 'Theory Session' : 'Lab Session'}
          </span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="app-container">
            <header className="header">
                <div className="header-content">
                    <h1>
                        <span className="hat-icon">🎓</span>
                        3rd Year Computer Science Timetable
                    </h1>
                    <p>Bachelor of Science in Computer Science - Semester 1</p>
                    <div className="header-badge">
                        Academic Schedule 2026
                    </div>
                </div>
            </header>

            <div className="tabs-container">
                <div className="days-tabs">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                        <button
                            key={day}
                            className={`day-tab ${activeDay === day ? 'active' : ''}`}
                            onClick={() => setActiveDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                <div className="timetable-content">
                    <div className="day-header">
                        <h2>
              <span className="day-icon">
                {activeDay === 'Monday' && '📅'}
                  {activeDay === 'Tuesday' && '📚'}
                  {activeDay === 'Wednesday' && '📖'}
                  {activeDay === 'Thursday' && '🎯'}
                  {activeDay === 'Friday' && '✨'}
              </span>
                            {activeDay}'s Schedule
                        </h2>
                        <p>{getDayClasses(activeDay).length} class{getDayClasses(activeDay).length !== 1 ? 'es' : ''} scheduled</p>
                    </div>

                    <div className="classes-list">
                        {getDayClasses(activeDay).length > 0 ? (
                            getDayClasses(activeDay).map((cls, index) => (
                                <ClassItem key={index} cls={cls} />
                            ))
                        ) : (
                            <div className="no-classes">
                                🎉 No classes scheduled for {activeDay}!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App;