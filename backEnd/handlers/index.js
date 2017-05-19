const path = require('path');
 function home (req, res)  {
  res.sendFile('index.html');
}
module.exports={
  home
}
