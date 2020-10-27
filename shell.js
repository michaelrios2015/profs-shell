// so this is just a way of chaning the color of the test, is it a node thing
//do it need to go into a JSON not sure?? 
const chalk = require('chalk');
//this gets the functions
const commands = require('./commands');

//this gets data
process.stdin.on('data', (data)=> {
  //tries to run the command (is run a speial word)
  commands.run(data.toString(), (err, result)=> {
    //throws error
    if(err){
      console.log(chalk.red(err));
    }
    //return result 
    else {
      console.log(chalk.green(result));
    }
  });
});
