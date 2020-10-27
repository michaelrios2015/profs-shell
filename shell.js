const chalk = require('chalk');
const commands = require('./commands');

process.stdin.on('data', (data)=> {
  commands.run(data.toString(), (err, result)=> {
    if(err){
      console.log(chalk.red(err));
    }
    else {
      console.log(chalk.green(result));
    }
  });
});
