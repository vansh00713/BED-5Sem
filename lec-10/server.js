const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.json());
// app.get('/', (req, res) => {


//      res.sendFile(__dirname + "/index.html");
// })
// app.get('/about.html', (req, res) => {
//      res.sendFile(__dirname + "/about.html");
// });
app.post("/addUser", (req, res) => {
     console.log(req.body);
     let username = req.body.username;
     let password = req.body.password;
     let email = req.body.email;
     res.json({
        username,
        password,
        email 
     });
    // res.send("check terminal for data");
});
app.listen(5500, () => {
  console.log('Server is running on port 5500');
});