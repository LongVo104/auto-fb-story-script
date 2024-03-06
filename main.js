const { scenario } = require('./scenario');
const VsmartSteps = require('./vsmart-fb-selection.json');
const NokiaG21Steps = require('./nokia-g21-fb-selection.json');
const SamsungA50Steps = require('./samsung-a50-fb-selection.json');

const args = process.argv.slice(2);
const deviceId = args[0];
const RUN_TIME_INTERVAL = 120000;
let countRunTime = 0;

const getStepsWithDeviceId = (deviceId) => {
  switch (deviceId) {
    case 'PT19655KA1232103572':
      return NokiaG21Steps;
    case 'AGD00061047':
      return VsmartSteps;
    case 'R58M47N5JMB':
      return SamsungA50Steps;
    default:
      return [];
  }
};

const startInterval = () => {
  const timeInterval = setInterval(async () => {
    try {
      await scenario(deviceId, getStepsWithDeviceId(deviceId));
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
    await scenario(deviceId, getStepsWithDeviceId(deviceId));
    startInterval();
  } catch (error) {
    console.log('<><><><><><><><><><><><> run scenario error ', error);
  }
};

executeScript();
