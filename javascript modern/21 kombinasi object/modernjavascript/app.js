let jarJar = {
    name : 'jar jar binks',
    gender : 'male',
    height : 196,
    active : true,
    talk: function(){
        return 'Misa, Jar Jar!'
    },
    friends:['obi-wan kenobi','anakin skywalker','rd2d'],
    bio:{
        skincolor : 'brown',
        weight:68
    }
};
let padme = {
    name :'padme amidala',
    gender : 'female',
    height : 178
}

let studentList[jarJar,padme];

console.table(studentList);
console.log(studentList[1].name);

// console.log(student.name);
// console.log(student.gender);
// console.log(student.height);
// console.log(student.talk());
// console.log(student.friends[1]);
// console.log(student.bio.skincolor);
