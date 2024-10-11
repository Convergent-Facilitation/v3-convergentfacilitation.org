import React from 'react';

function LocalTimeFromUTC({ startUtcTime, endUtcTime }) {
  // Create Date objects from the UTC time strings
  const start = new Date(startUtcTime);
  const end = new Date(endUtcTime);

  const timeOnlyFormat = { hour: '2-digit', minute: '2-digit' };
  const timeAndTimezoneFormat = { hour: '2-digit', minute: '2-digit',  timeZoneName: 'short' };
  const dateOnlyFormat = { month: 'short', day: 'numeric'}


  const formatTime = (utcDate, options = {}) => {
    const date = new Date(utcDate);
    return new Intl.DateTimeFormat('en-US', options).format(date);
    // 'en-US' can be replaced with the desired locale
  };


  const formattedStartTime = formatTime(start, timeOnlyFormat);
  const formattedEndTime = formatTime(end, timeAndTimezoneFormat);
  const formattedStartDate = formatTime(start, dateOnlyFormat);

  return (
    <span>
	  {formattedStartDate}, {formattedStartTime} - {formattedEndTime} 
    </span>
  );
}

export default LocalTimeFromUTC;

