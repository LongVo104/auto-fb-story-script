const { scenario } = require('./scenario');
const SamsungA50Steps = require('./samsung-a50-fb-selection.json');

const args = process.argv.slice(2);
const deviceId = args[0];

const runScript = async () => {
  try {
    await scenario(deviceId, SamsungA50Steps);
    console.log('>>>>>>>>>> Done testing ');
  } catch (error) {
    console.log('>>>>>>>>>> run error ', error);
  }
};

runScript();
