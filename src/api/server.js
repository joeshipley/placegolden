const serverless = require('serverless-http');
const express = require('express');
const images = require('../../images/images.json');

const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.static('public'));

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

router.get('/:width/:height', (req, res, next) => {
  const { width, height } = req.params;
  let imageData1 = '';
  let ratio = width/height;
  let getImageAttempts = 0;
  const yourImage = images[Math.floor(Math.random() * images.length)];
  /* You are doing a random search here to find matching images... And this code doesn't work, getImage is not defined after it runs.
  const getImage = () => {
    const yourImage = images[Math.floor(Math.random() * images.length)];
    //console.log(yourImage);
    const yourImageRatio = yourImage.width/yourImage.height;
    if((ratio < 0.8 && yourImageRatio > 1) || (ratio > 1.2 && yourImageRatio < 1)) {
      getImageAttempts++;
      if(getImageAttempts < 10) {
        getImage();
      } else {
        return yourImage;
      }
    }
  }
  */
  /*Turns out netlify doesn't support binary data, so we have to it the same was as place keanu.*/
  res.writeHead(200, {'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400'});
  return res.end(
      '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+ width + '" height="' + height +
      '" viewBox="0 0 ' + yourImage.width + ' ' + yourImage.height +
      '" preserveAspectRatio="xMidYMid slice"> ' +
      '<image xlink:href="' + yourImage.data + '" width="' + yourImage.width + '" height="' + yourImage.height + '" /></svg>');
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
