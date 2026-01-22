import './DayCard.css';

const DayCard = ({ day, date, classes }) => {
    const getDayIcon = (dayName) => {
        switch(dayName.toLowerCase()) {
            case 'monday': return '📅';
            case 'tuesday': return '📚';
            case 'wednesday': return '📖';
            case 'thursday': return '🎯';
            case 'friday': return '✨';
            default: return '📋';
        }
    };

    return (
        <div className="day-card">
            <div className="day-header">
                <h2 className="day-title">
                    {getDayIcon(day)} {day}
                </h2>
                <span className="day-date">{date}</span>
            </div>

            <div className="classes-list">
                {classes.map((cls, index) => (
                    <div
                        key={index}
                        className="class-item"
                        style={{ borderLeftColor: cls.color }}
                    >
                        <div className="class-time">
                            <span className="time-icon">🕐</span>
                            {cls.time}
                        </div>

                        <div className="class-details">
                            <h3 className="class-subject">{cls.subject}</h3>

                            <div className="class-info">
                                <div className="info-item">
                                    <span className="info-icon">📍</span>
                                    <span>{cls.room}</span>
                                </div>

                                <div className="info-item">
                  <span className="info-icon">
                    {cls.type === 'lecture' ? '🎓' : '💻'}
                  </span>
                                    <span className={`class-type ${cls.type}`}>
                    {cls.type.charAt(0).toUpperCase() + cls.type.slice(1)}
                  </span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="class-color-indicator"
                            style={{
                                backgroundColor: cls.color,
                                background: `linear-gradient(135deg, ${cls.color}, ${cls.color}AA)`
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="day-footer">
                <div className="total-classes">
                    📊 {classes.length} Class{classes.length !== 1 ? 'es' : ''} Total
                </div>
            </div>
        </div>
    );
};


export default DayCard;