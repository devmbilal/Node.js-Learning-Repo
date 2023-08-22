const express = require('express');
const Joi = require('joi');
const app = express();
app.use(express.json());


const courses = [
    {id: 1, name: 'course1'},   
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

app.get('/', (req, res) => {
    res.send('Hello World!');
}); 

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);    
}); 

app.get('/api/courses/:id', (req, res) =>{
    res.send(req.params.id);
});

app.get('/api/courses/:id',(req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found'); 
    res.send(course);
});

app.post('/api/courses', (req, res) => {   
    const schema = Joi.object({  
        name: Joi.string().min(3).required()    
    });
    const result = schema.validate(req.body);      

    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id:courses.length+1,
        name:req.body.name
    };
    courses.push(course);
    res.send(course);

});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found');

    const { error } = validateCourse(req.body); //result.error          
    if(error){      
        res.status(400).send(error.details[0].message);
        return;
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('App listening on port 3000!');
});


function validateCourse(course){    
    const schema = Joi.object({  
        name: Joi.string().min(3).required()    
    });
    return schema.validate(course);
}



