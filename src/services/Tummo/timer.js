import { getTimer, setTimer, clearTimer } from '../utils/timer';

export const startTimer = async (duration, onTick) => {
  let elapsed = 0;
  const intervalId = setInterval(() => {
    elapsed += 1000;
    onTick(elapsed);
    if (elapsed >= duration) {
      clearInterval(intervalId);
    }
  }, 1000);
  setTimer({ intervalId, duration });
};

export const stopTimer = async () => {
  const timer = await getTimer();
  if (timer.intervalId) {
    clearInterval(timer.intervalId);
    clearTimer();
  }
};

export const resetTimer = async () => {
  stopTimer();
  setTimer({});
};
