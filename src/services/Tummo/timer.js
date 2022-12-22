import Countdown from 'react-native-countdown-component';

export const startTimer = (onTick) => {
  return (
    <Countdown
      until={15}
      onFinish={() => stopTimer()}
      onPress={() => stopTimer()}
      size={20}
      timeToShow={['M', 'S']}
      timeLabels={{ m: null, s: null }}
      showSeparator
      running
      style={{ fontSize: 20 }}
      onTick={elapsed => onTick(elapsed * 1000)}
    />
  );
};

export const stopTimer = () => {
  // stops the timer
};

export const resetTimer = () => {
  stopTimer();
};
