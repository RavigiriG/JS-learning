// const tinderUser = new Object() // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "123abc"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: "ravi",
        lastname: "gausvami"
    }
}


// console.log(regularUser.fullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "rk@gmail.com"
    },
    {
        id: 1,
        email: "rk@gmail.com"
    },
    {
        id: 1,
        email: "rk@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor: "Hitesh",    
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

/*
For reactJS
const navbar = ({company}) => {
}
navbar(company = "Ravi")
*/

// {
//     "name" : "Hitesh",
//     "coursename" : "js in hindi",
//     "price": "free"
// }

