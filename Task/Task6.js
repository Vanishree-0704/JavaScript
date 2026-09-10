// ========TASK 1 - STUDENT RESULT ANALYZER ====================

let studentName = "Kavin"
let department = "CSE"

let mark1 = 90
let mark2 = 85
let mark3 = 75
let mark4 = 80
let mark5 = 70

function studentResult() {

    let total = mark1 + mark2 + mark3 + mark4 + mark5
    let average = total / 5

    let result
    let grade

    if (average >= 50) {
        result = "Pass"
    } else {
        result = "Fail"
    }

    if (average >= 90) {
        grade = "A"
    } else if (average >= 75) {
        grade = "B"
    } else if (average >= 60) {
        grade = "C"
    } else if (average >= 50) {
        grade = "D"
    } else {
        grade = "Fail"
    }

    console.log("Name:", studentName)
    console.log("Department:", department)
    console.log("Total:", total)
    console.log("Average:", average)
    console.log("Result:", result)
    console.log("Grade:", grade)
}

studentResult()



// ============ TASK 2 - EMPLOYEE SALARY CALCULATOR ==============

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
}

function calculateSalary(employee) {

    let basicSalary = employee.salary
    let bonus = 0

    if (employee.experience >= 5) {
        bonus = basicSalary * 15 / 100
    } else if (employee.experience >= 2) {
        bonus = basicSalary * 10 / 100
    }

    let finalSalary = basicSalary + bonus

    console.log("Name:", employee.name)
    console.log("Basic Salary:", basicSalary)
    console.log("Bonus:", bonus)
    console.log("Final Salary:", finalSalary)
}

calculateSalary(employee)



// ============ TASK 3 - PRODUCT FILTER SYSTEM 

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
]


// 1. Products above 2000

let above2000 = products.filter(function(product) {
    return product.price > 2000
})

console.log("Above 2000:", above2000)


// 2. only Electronics 

let electronics = products.filter(function(product) {
    return product.category == "electronics"
})

console.log("Electronics:", electronics)


// 3. First product below 1000

let below1000 = products.find(function(product) {
    return product.price < 1000
})

console.log("Below 1000:", below1000)


// 4. Total price

let totalPrice = products.reduce(function(total, product) {
    return total + product.price
}, 0)

console.log("Total Price:", totalPrice)


// 5. Any product above 50000

let above50000 = products.some(function(product) {
    return product.price > 50000
})

console.log("Above 50000:", above50000)


// 6. Every product above 500

let above500 = products.every(function(product) {
    return product.price > 500
})

console.log("Every product above 500:", above500)



// TASK 4 - EMPLOYEE MANAGEMENT ====================

let employees = [
    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },
    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 50000
    },
    {
        id: 103,
        name: "Priya",
        role: "HR",
        salary: 45000
    },
    {
        id: 104,
        name: "Vani",
        role: "Tester",
        salary: 35000
    },
    {
        id: 105,
        name: "Moorthy",
        role: "Developer",
        salary: 60000
    },
    {
        id: 106,
        name: "Nandhini",
        role: "Designer",
        salary: 42000
    }
]


// 1. Display all employee names

let employeeNames = employees.map(function(employee) {
    return employee.name
})

console.log("Employee Names:", employeeNames)


// 2. Employees earning above 40000

let above40000 = employees.filter(function(employee) {
    return employee.salary > 40000
})

console.log("Above 40000:", above40000)


// 3. Find employee with ID 103

let employee103 = employees.find(function(employee) {
    return employee.id == 103
})

console.log("Employee 103:", employee103)


// 4. Calculate total salary

let totalSalary = employees.reduce(function(total, employee) {
    return total + employee.salary
}, 0)

console.log("Total Salary:", totalSalary)


// 5. Find highest paid employee

let highest = employees[0]

for (let employee of employees) {

    if (employee.salary > highest.salary) {
        highest = employee
    }

}

console.log("Highest Paid:", highest)


// 6. Sort highest salary to lowest

employees.sort(function(a, b) {
    return b.salary - a.salary
})

console.log("High to Low:", employees)


// 7. New array with only employee names

let namesOnly = employees.map(function(employee) {
    return employee.name
})

console.log("Names Only:", namesOnly)



// ------------------TASK 5 - SHOPPING CART
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
]


function calculateCart(cart) {

    let total = cart.reduce(function(sum, item) {

        let itemTotal = item.price * item.quantity

        return sum + itemTotal

    }, 0)


    let discount = 0

    if (total > 50000) {
        discount = total * 10 / 100
    }


    let finalAmount = total - discount

    console.log("Cart Total:", total)
    console.log("Discount:", discount)
    console.log("Final Amount:", finalAmount)
}

calculateCart(cart)



//  TASK 6 - STUDENT SEARCH SYSTEM ====================

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
]


// 1. Display all student names

let studentNames = students.map(function(student) {
    return student.name
})

console.log("Student Names:", studentNames)


// 2. Students scored above 80

let above80 = students.filter(function(student) {
    return student.mark > 80
})

console.log("Above 80:", above80)


// 3. Find Priya

let priya = students.find(function(student) {
    return student.name == "Priya"
})

console.log("Priya:", priya)


// 4. Calculate average mark

let totalMark = students.reduce(function(total, student) {
    return total + student.mark
}, 0)

let averageMark = totalMark / students.length

console.log("Average Mark:", averageMark)


// 5. Check anyone failed

let failed = students.some(function(student) {
    return student.mark < 50
})

console.log("Anyone Failed:", failed)


// 6. Check everyone scored above 40

let above40 = students.every(function(student) {
    return student.mark > 40
})

console.log("Everyone Above 40:", above40)


// 7. Sort students by marks

students.sort(function(a, b) {
    return a.mark - b.mark
})

console.log("Sorted Students:", students)



// ==================== TASK 7 - ARRAY TRANSFORMATION ====================

let numbers = [12, 5, 8, 21, 44, 7, 30, 15]


// 1. Numbers x 2

let doubleNumbers = numbers.map(function(number) {
    return number * 2
})

console.log("Double:", doubleNumbers)


// 2. Even numbers

let evenNumbers = numbers.filter(function(number) {
    return number % 2 == 0
})

console.log("Even Numbers:", evenNumbers)


// 3. Numbers greater than 15

let greater15 = numbers.filter(function(number) {
    return number > 15
})

console.log("Greater than 15:", greater15)


// 4. First number greater than 20

let firstGreater20 = numbers.find(function(number) {
    return number > 20
})

console.log("First Greater than 20:", firstGreater20)


// 5. Total of all numbers

let numberTotal = numbers.reduce(function(total, number) {
    return total + number
}, 0)

console.log("Total:", numberTotal)


// 6. Any number greater than 40

let greater40 = numbers.some(function(number) {
    return number > 40
})

console.log("Greater than 40:", greater40)


// 7. Every number is positive

let positive = numbers.every(function(number) {
    return number > 0
})

console.log("Every number positive:", positive)


// 8. Sort highest to lowest

numbers.sort(function(a, b) {
    return b - a
})

console.log("High to Low:", numbers)



// ======= TASK 8 - STRING ANALYZER ====================

let sentence = prompt("Enter a sentence")


// Total characters

console.log("Total Characters:", sentence.length)


// Uppercase

console.log("Uppercase:", sentence.toUpperCase())


// Lowercase

console.log("Lowercase:", sentence.toLowerCase())


// Contains JavaScript

console.log("Contains JavaScript:", sentence.includes("JavaScript"))


// First character

console.log("First Character:", sentence.slice(0, 1))


// Last character

console.log("Last Character:", sentence.slice(-1))


// Number of words

let words = sentence.split(" ")

console.log("Number of Words:", words.length)


// Replace JavaScript with Python

console.log("Replace:", sentence.replace("JavaScript", "Python"))


// Convert sentence into array

console.log("Array:", words)



// == FINAL MINI PROJECT - EMPLOYEE DASHBOARD ====================

let companyEmployees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
]


// 1. Employee List

console.log("All Employees:", companyEmployees)


// 2. Search Employee by Name

let searchName = "Priya"

let searchEmployee = companyEmployees.find(function(employee) {
    return employee.name == searchName
})

console.log("Search Employee:", searchEmployee)


// 3. Department Filter

let itEmployees = companyEmployees.filter(function(employee) {
    return employee.department == "IT"
})

console.log("IT Employees:", itEmployees)


// 4. Salary above 50000

let highSalaryEmployees = companyEmployees.filter(function(employee) {
    return employee.salary > 50000
})

console.log("Above 50000:", highSalaryEmployees)


// 5. Total Company Salary

let companySalary = companyEmployees.reduce(function(total, employee) {
    return total + employee.salary
}, 0)

console.log("Total Company Salary:", companySalary)


// 6. Highest Salary

let highestSalary = companyEmployees[0]

for (let employee of companyEmployees) {

    if (employee.salary > highestSalary.salary) {
        highestSalary = employee
    }

}

console.log("Highest Salary:", highestSalary.salary)


// 7. Employees with more than 3 years experience

let experiencedEmployees = companyEmployees.filter(function(employee) {
    return employee.experience > 3
})

console.log("Experienced Employees:", experiencedEmployees)


// 8. Sort Low to High

let lowToHigh = [...companyEmployees]

lowToHigh.sort(function(a, b) {
    return a.salary - b.salary
})

console.log("Low to High:", lowToHigh)


// Sort High to Low

let highToLow = [...companyEmployees]

highToLow.sort(function(a, b) {
    return b.salary - a.salary
})

console.log("High to Low:", highToLow)


// 9. Statistics

let averageSalary = companySalary / companyEmployees.length

console.log("Total Employees:", companyEmployees.length)
console.log("Total Salary: ₹" + companySalary)
console.log("Highest Salary: ₹" + highestSalary.salary)
console.log("Average Salary: ₹" + averageSalary)