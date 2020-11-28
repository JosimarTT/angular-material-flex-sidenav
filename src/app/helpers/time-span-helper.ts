// input:  01:30:30
// output: 5430
export const timeSpanToSeconds = (value: string) => {
  const timeSpanArray = value.split(':');
  const hours = Number(timeSpanArray[0]) * 3600;
  const minutes = Number(timeSpanArray[1]) * 60;
  return hours + minutes;
};

// input:  08:08:08
// output: 08:08
export const deleteSecondsPart = (value: string) => {
  const lastIndex = value.lastIndexOf(':');
  return value.substr(0, lastIndex);
};

// input:  (08:00:00, 14:00:00)
// output: 08:00 - 14:00
export const getScheduleFormated = (start: string, end: string) => {
  const newStart = deleteSecondsPart(start);
  const newEnd = deleteSecondsPart(end);
  return `${newStart} - ${newEnd}`;
};

// input:  (08:00:00, 14:00:00)
// output: 06:00
export const getOfficeHours = (start: string, end: string) => {
  const newStart = timeSpanToSeconds(start);
  const newEnd = timeSpanToSeconds(end);
  const difference = newEnd - newStart;
  const tempDate = new Date(difference * 1000).toISOString().substr(11, 8);
  return deleteSecondsPart(tempDate);
};

// input:  5430
// output: 01:30:30
export const SecondsToTimeSpan = (value: number) => {
  const tempDate = new Date(value * 1000).toISOString().substr(11, 8);
  return deleteSecondsPart(tempDate);
};
