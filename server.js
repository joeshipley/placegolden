import express from 'express';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();

app.use(express.json());

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('public/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'public', 'build', 'index.html'));
//   });
// }

app.use(express.static('public'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));