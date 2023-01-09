const app = express();
const port = process.env.PORT || 4000;


// Path: backend/server.js
// app.use(express.static(path.join(__dirname, '../frontend/build')));



app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});