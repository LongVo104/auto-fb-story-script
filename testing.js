const { scenario } = require('./scenario');
const Steps = require('./vsmart-fb-selection.json');
// const Steps = require('./samsung-a50-fb-selection.json');

const args = process.argv.slice(2);
const deviceId = args[0];

const runScript = async () => {
  try {
    await scenario(deviceId, Steps);
    console.log('>>>>>>>>>> Done testing ');
  } catch (error) {
    console.log('>>>>>>>>>> run error ', error);
  }
};

runScript();
