let globalCount = 10;

function showLocalScope() {

    const localMessage = "I am safe inside this function!";
    console.log("Accessing inside function:", localMessage);
    console.log("Accessing global from inside function:", globalCount);
}
function modifyVariables() {
   
    globalCount = 50;
    try {
        localMessage = "Changing you!";
    } catch (error) {
        console.log("Error caught: Cannot modify 'localMessage' from here. " + error.message);
    }
}

function Student(firstName, lastName, age, course) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.course = course;
    
    this.getDetails = function() {
        return `${this.firstName} ${this.lastName}, Age: ${this.age}, Course: ${this.course}`;
    };
}

const student1 = new Student("Likhona", "Bolani", 20, "Software Development");
const student2 = new Student("Sipho", "Mokoena", 22, "Web Design");
const student3 = new Student("Devon", "Hendrix", 19, "Data Analytics");

const universityCampus = {
    campusName: "Paarl Tech Institute",
    location: "Paarl, Western Cape",
    facilities: ["Computer Lab", "Library", "Study Hall"],
    contactDetails: {
        email: "info@paarltech.ac.za",
        phone: "+27 21 555 0199",
        operatingHours: {
            weekdays: "08:00 - 16:30",
            saturdays: "09:00 - 13:00"
        }
    }
};

console.log("--- Scope Test ---");
showLocalScope();
modifyVariables();
console.log("Global count after modification:", globalCount);

console.log("\n--- Student Instances Test ---");
console.log(student1.getDetails());
console.log(student2.getDetails());
console.log(student3.getDetails());

console.log("\n--- Nested Object Access Test ---");
console.log("Campus Location:", universityCampus.location);

console.log("Weekday Hours:", universityCampus.contactDetails.operatingHours.weekdays);
console.log("Primary Lab:", universityCampus.facilities[0]);