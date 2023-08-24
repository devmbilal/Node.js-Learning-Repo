const express = require('express');
const router = express.Router();


const courses = [
    {id: 1, name: 'course1'},   
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];


router.get('/', (req, res) => {
    res.send(courses);    // For Sending JSON Responses
}); 

router.get('/:id',(req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found'); 
    res.send(course);
});

router.post('/', (req, res) => {   
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

router.put('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found');

    const { error } = validateCourse(req.body); //result.error          
    if(error){      
        res.status(400).send(error.details[0].message);
        return;
    }
});

router.delete('/:id', (req, res) => {  
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) res.status(404).send('The course with the given ID was not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course);
});


function validateCourse(course){    
    const schema = Joi.object({  
        name: Joi.string().min(3).required()    
    });
    return schema.validate(course);
}


module.exports = router;
