// Subject #1

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};
{
  console.log(user.studentstatus);
}

//Subject #2

let number = [4, 8, 15, 16, 23, 42];

for (let n = 0; n < 6; n++) {
  console.log(number[n]);
}

// //Subject #3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (n = 0; n < numbers.length; n++)
  if (numbers[n] > 5) {
    console.log(numbers[n]);
  }

// Subject #4

let users = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};

if (users["age"] > 18 && users.studentstatus["active"]) {
  console.log("hello");
}

if ((users["name"] = "giorgi")) {
  console.log("hello giorgi");
}

if ((users["studentstatus"] = "active" || users["age"] < 25)) {
  console.log("hello world");
} else {
  console.log("error");
}

//Subject #5
let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];

for (let s of array)
  if (typeof s == "string") {
    console.log(s);
  }

// Subject #6

let lastusers = [
  { username: "test1", status: false },
  { username: "test2", status: false },
  { username: "test3", status: true },
];

for (let u of lastusers)
  if (u.status != false) {
    console.log(u);
  }
