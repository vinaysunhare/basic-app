const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json([
        {
            id: 1,
            name: "aayush sunhare",
            age: 12
        },
        {
            id: 2,
            name: "vinay sunhare",
            age: 27
        }, 

             {
            id: 3,
            name: "unique",
            age: 08
        },
        
      {
            id: 4,
            name: "prem",
            age: 40
        }
        
    ]);
});

app.listen(5000, () => {
    console.log("app is running on 5000 port");
});
