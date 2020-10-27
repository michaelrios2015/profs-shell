const fs = require('fs');

const echo = (arr, cb)=> {
  cb(null, arr.join(' '));
}

const wc = (arr, cb)=> {
  cb(null, arr.length);
}

const ls = (arr, cb)=> {
  fs.readdir(__dirname, (err, results)=> {
    if(err){
      cb(err);
    }
    else {
      cb(null, results.join('\n'));
    }
  });
}

const pwd = (arr, cb)=> {
  cb(null, __dirname);
};

const cat = (arr, cb)=> {
  try {
    fs.readFile(arr[0], (err, data)=> {
      if(err){
        cb(err);
      }
      else {
        cb(null, data.toString());
      }
    });
  }
  catch(ex){
    cb(ex);
  }
} 

const _commands = {
  cat,
  echo,
  ls,
  wc,
  pwd
};


//ok so run is a function prof built
const run = (str, cb)=> {
  //turns string into array
  const parts = str.trim().split(' ');
  //looks for command in first part 
  //console.log(parts);
  //command is an object so this call will or will not work
  const command = _commands[parts[0]];
  //console.log(command);
  //throws error
  if(!command){
    cb(`${ parts[0] } command not found`);
  }
  //presumably runs it by I am a little confused how
  else {
    console.log(parts.slice(1));
    command(parts.slice(1), cb);
  }
};

//this is needed to export it (essentially magic to me)
module.exports = {
  //so confused why is it not taking arguements
  run
};
