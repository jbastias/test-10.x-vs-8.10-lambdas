// 'use strict';
const { execSync } = require('child_process');


module.exports.testLambdaNode = async (event) => {

  console.log(execSync(`ls /bin`).toString());

  console.log(execSync(`ls -l /usr/bin`).toString());

  console.log(execSync(`which which`).toString());

  console.log(execSync(`which file`).toString());

  console.log(execSync(`which gunzip`).toString());

  console.log(execSync(`file /bin/*`).toString());

  console.log(execSync(`find /bin -exec file {} \\;`).toString());

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
    }, null, 2),
  };

};
