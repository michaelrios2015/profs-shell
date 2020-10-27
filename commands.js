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

const run = (str, cb)=> {
  const parts = str.trim().split(' ');
  const command = _commands[parts[0]];
  if(!command){
    cb(`${ parts[0] } command not found`);
  }
  else {
    command(parts.slice(1), cb);
  }
};

module.exports = {
  run
};
