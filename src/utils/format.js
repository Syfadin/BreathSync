export const formatTime = (milliseconds) => {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  
  export const formatDuration = (duration) => {
    const hours = Math.floor(duration / 3600);
    const minutes = Math.floor((duration % 3600) / 60);
    const formattedHours = hours ? `${hours}:` : '';
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}${formattedMinutes}`;
  };
  
  export const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };
  