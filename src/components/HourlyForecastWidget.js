
function HourlyForecastWidget({ data}) {
    const {date, icon, summary, temperature, precipitation, wind} = data;
    return (
        <div className='Widget'>
            <div className='day'>{date}</div>
            <div className='time'>{date}</div>
            <div className='icon-temp'>
                <div className='icon'>

                </div>
            </div>
        </div>
    )
}

export default HourlyForecastWidget