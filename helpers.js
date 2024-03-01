const { exec } = require('child_process');

let sleepSetTimeout_ctrl;
const sleep = (ms) => {
  clearInterval(sleepSetTimeout_ctrl);
  return new Promise((resolve) => (sleepSetTimeout_ctrl = setTimeout(resolve, ms)));
};

const executeCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        resolve(`std error: ${stderr}`);
        return;
      }
      resolve(`std out: ${stdout}`);
    });
  });
};

module.exports = {
  sleep,
  executeCommand,
};
