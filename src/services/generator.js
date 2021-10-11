// /* eslint-disable no-unused-expressions */
// import * as fs from 'fs';
// import express from 'express';
// // import * as path from 'path';
// import * as serverless from 'serverless-http';

// const app = express();
// const router = express.Router();

// const currentDir = process.env.LAMBDA_TASK_ROOT || __dirname;

// app.get('/:width/:height', (req, res, next) => {
//     let { width, height } = req.params;
//     console.log(currentDir);
//     fs.readFile('./images.json', 'utf-8', (err, data) => {
//          if(err) return res.redirect('/about');
    
//     const images = JSON.parse(data);

//     console.log(images);

//     let ratio = width/height;

//       let getImageAttempts = 0;
//       const getImage = () => {
//         const yourImage = images[Math.floor(Math.random() * images.length)];
//         const yourImageRatio = yourImage.width/yourImage.height;
  
//         if((ratio < 0.8 && yourImageRatio > 1) || (ratio > 1.2 && yourImageRatio < 1)) {
//           getImageAttempts++;
//           if(getImageAttempts < 10) {
//             getImage();
//           } else {
//             return yourImage;
//           }
//         } else {
//           return yourImage;
//         }
//       }
//       const image = getImage();
  
//       console.log(image);
  
//       res.writeHead(200, {'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400'});
//       return res.end('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + width + '" height="' + height + '" viewBox="0 0 ' + image.width + ' ' + image.height + '" preserveAspectRatio="xMidYMid slice"> width="' + image.width + '" height="' + image.height + ' /></svg>');
//     })
//   })

//   app.use('/.netlify/functions/generator', router);

  // const handler = serverless(app);
  // module.exports.handler = async (event, context) => {
  //   // you can do other things here
  //   const result = await handler(event, context);
  //   // and here
  //   return result;
  // };



//     const image = getImage();

//     console.log(image);

//     return res.send(image);

//     //res.writeHead(200, {'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400'});
    
//     //return res.end('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + width + '" height="' + height + '" viewBox="0 0 ' + image.width + ' ' + image.height + '" preserveAspectRatio="xMidYMid slice"><image xlink:href="' + image.data + '" width="' + image.width + '" height="' + image.height + '" /></svg>');


//   });
// });


