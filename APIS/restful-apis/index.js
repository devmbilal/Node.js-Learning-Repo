const express = require('express');
const bodyParser = require('body-parser');
const app = express();  
const port = 3000;

app.use(bodyParser.json()); 

let todos = [
    {id:1,title:"Todo 1",},
    {id:1,title:"Todo 1",},
    {id:1,title:"Todo 1",},
    {id:1,title:"Todo 1",}
]

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 
