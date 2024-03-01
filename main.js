const { scenario } = require('./scenario');
const Steps = require('./oppo-a15-fb-selection.json');
const args = process.argv.slice(2);
const deviceId = args[0];
const RUN_TIME_INTERVAL = 120000;
let countRunTime = 0;

const startInterval = () => {
  const timeInterval = setInterval(async () => {
    try {
      await scenario(deviceId, Steps);
      console.log(`<><><><><><><><><><><><><><> Done scenario ${++countRunTime} - Time: ${Date()}`);
    } catch (error) {
      console.log('<><><><><><><><><><><><> run scenario error ', error);
      clearInterval(timeInterval);
      timeInterval = null;
    }
  }, RUN_TIME_INTERVAL);
};

const executeScript = async () => {
  try {
    await scenario(deviceId, Steps);
    startInterval();
  } catch (error) {
    console.log('<><><><><><><><><><><><> run scenario error ', error);
  }
};

executeScript();
