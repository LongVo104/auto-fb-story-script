const { executeCommand, sleep } = require('./helpers');

const tapStep = (deviceId, position) => {
  const { x, y } = position;
  const command = `adb -s ${deviceId} shell input touchscreen tap ${x} ${y}`;
  return executeCommand(command);
};

const swipeStep = (deviceId, position, duration) => {
  const { x1, y1, x2, y2 } = position;
  const command = `adb -s ${deviceId} shell input touchscreen swipe ${x1} ${y1} ${x2} ${y2} ${duration || 1000}`;
  return executeCommand(command);
};

const scenario = async (deviceId, steps) => {
  for (let i = 0; i <= steps.length - 1; i++) {
    const step = steps[i] || {};
    const { position, timeout, note, duration, type } = step;
    timeout && (await sleep(timeout));
    if (type === 'tap') {
      await tapStep(deviceId, position);
    } else if (type === 'swipe') {
      await swipeStep(deviceId, position, duration);
    }
    console.log(`===> Done step - Type: ${type} - ${note} - position ${JSON.stringify(position)} timeout: ${timeout}`);
  }
};

module.exports = {
  scenario,
};
