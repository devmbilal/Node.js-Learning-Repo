const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(()=>console.log('Connected to MongoDB...'))
  .catch(err=>console.log('Could not connect to MongoDB...',err)) 

const courseSchema = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date,default:Date.now},
    isPublished:Boolean
});

const Course=mongoose.model('Course',courseSchema);

async function createCourse(){
    const course = new Course({
    name:'Node.js Course',
    author:'Muhammad Bilal',
    tags:['angular','frontend'],
    isPublished:true
})
   const result = await course.save();
   console.log(result);
}

createCourse();
async function getCourses(){
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in)

   const courses = await Course 
    //.find({author:'Muhammad Bilal',isPublished:true})
    // .find({price:{$gte:10,$lte:20}})
    .find({price:{$in:[10,15,20]}})
    .limit(10)
    .sort({name:1})
    .select({name:1,tags:1});
    console.log(courses);
}


getCourses();