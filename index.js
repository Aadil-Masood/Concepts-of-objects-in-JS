//Objects
var students = {
    name:'AADIL',
    age:25,
    address = 'delhi',
    mobile= 22222222

}

// accessing the objects using . notation
console.log(students.name)
console.log(students.age)
console.log(students.address)
console.log(students.mobile)

// accessing the objects using [] notation
console.log(students['name'])
console.log(students['age'])
console.log(students['address'])
console.log(students['mobile'])

//Nested objects
var students = {
    name:'AADIL',
    age:25,
    address = {
        city:'Delhi',
        state:'Delhi',
        pincode:'110095'
    }

}

//accessing the Nested objects using . notation
console.log(students.address.city)
console.log(students.address.state)
console.log(students.address.pincode)

//accessing the Nested objects using [] notation
console.log(students['address']['city'])
console.log(students['address']['state'])
console.log(students['address']['pincode'])

//adding key in a objects
var students = {
    name:'AADIL',
    age:25,
    address = {
        city:'Delhi',
        state:'Delhi',
        pincode:'110095'
    },
   education: 'graduated'

}

var video ={
    name:'access101 JS Tutorial',
    play:function(){
        console.log('video played')
    },
    time:[0,30,70]
}

console.log(video.name)
console.log(video.play())

var students1 = {
    name:'Kamil',
    age:25,
    address = {
        city:'abc',
        state:'ghj',
        pincode:'1102465'
    },
   education: 'graduated'

}

var students =students1

console.log(students)



var student= {
    name: 'Aadil',
    age: '25',
    gender: 'Male',
    address: {
        city: 'Delhi',
        State:  'Delhi',
        Pin: 110001
    },
    displayname: function()
    {
        console.log("working");
    }
}

console.log(student.name);
console.log(student["address"]["Pin"]);
console.log(student.displayname());
student.hobbbies = ['football','technology','tennis'];

console.log(student);

for (i=0; i<=hobbbies.length-1; i++)
{
    console.log(hobbbies[i]);
}


