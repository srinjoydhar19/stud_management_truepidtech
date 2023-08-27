const classes =[];
//classname is params and object creation
function createClass(className){
    return classes.find((cls)=>cls.name===className);
}
function addstudentToClass(className,student){
    const cls =getClass(className);
    if(cls){
    cls.student.push(student);
    }
}

export default{
    createClass,
    getClass,
    addstudentToClass
}