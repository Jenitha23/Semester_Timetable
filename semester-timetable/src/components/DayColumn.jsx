import './DayCard.css';

const DayColumn = ({ day, date, classes }) => {
    const getDayIcon = (dayName) => {
        const icons = {
            'Monday': '📅',
            'Tuesday': '📚',
            'Wednesday': '📖',
            'Thursday': '🎯',
            'Friday': '✨'
        };
        return icons[dayName] || '📋';
    };

    return (
        <div className="day-column" style={{ borderLeftColor: '#8B4513' }}>
            <div className="day-header">
                <div className="day-title">
                    {getDayIcon(day)} {date}
                </div>
                <div className="day-date">{day}</div>
            </div>

            <div className="classes-container">
                {classes.map((cls, index) => (
                    <div
                        key={index}
                        className="class-item-compact"
                        style={{ borderLeftColor: cls.color }}
                    >
                        <div className="class-time-compact">
                            <span className="time-icon-compact">🕐</span>
                            {cls.time}
                        </div>

                        <h3 className="class-subject-compact">{cls.subject}</h3>

                        <div className="class-info-compact">
                            <div className="info-item-compact">
                                <span className="info-icon-compact">📍</span>
                                <span>{cls.room}</span>
                            </div>

                            <div className="info-item-compact">
                <span className="info-icon-compact">
                  {cls.type === 'lecture' ? '🎓' : '💻'}
                </span>
                                <span className={`class-type-badge ${cls.type}`}>
                  {cls.type}
                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="day-footer-compact">
                <div className="total-classes-compact">
                    {classes.length} class{classes.length !== 1 ? 'es' : ''}
                </div>
            </div>
        </div>
    );
};


export default DayColumn;