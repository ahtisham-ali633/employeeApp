require("dotenv").config();

const app = require("../HTTP/Server");


app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`);
})

