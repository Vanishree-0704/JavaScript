// ============================== TASK 1 ==============================
/*----------------------------------------------------
let api = fetch("https://fakestoreapi.com/products")

let data = api.then(function(response) {
    return response.json()
})

data.then(function(products) {

    // Display Product Title, Price and Category

    products.forEach(function(product) {

        console.log("Title:", product.title)
        console.log("Price:", product.price)
        console.log("Category:", product.category)

    })


    // map() - get only title and price

    let titlePrice = products.map(function(product) {

        return {
            title: product.title,
            price: product.price
        }

    })

    console.log("Title and Price:", titlePrice)


    // filter() - price greater than 100

    let costlyProducts = products.filter(function(product) {

        return product.price > 100

    })

    console.log("Products above $100:", costlyProducts)


    // find() - first electronics product

    let electronicProduct = products.find(function(product) {

        return product.category == "electronics"

    })

    console.log("First Electronics Product:", electronicProduct)


    // reduce() - total price

    let total = products.reduce(function(sum, product) {

        return sum + product.price

    }, 0)

    console.log("Total Price:", total)


    // sort() - highest price to lowest

    let highToLow = products.sort(function(a, b) {

        return b.price - a.price

    })

    console.log("Highest to Lowest:", highToLow)

})
.catch(function(error) {

    console.log("Something went wrong:", error)

})
.finally(function() {

    console.log("Task Completed")

})

-----------------------------------------------------------------------------------------------------------*/

// ============================== TASK 2 ==============================

/*----------------------------------------------------------------------------
let api2 = fetch("https://fakestoreapi.com/products")

api2
.then(function(response) {

    return response.json()

})
.then(function(products) {


    function dashboard() {

        console.log("===== PRODUCT DASHBOARD =====")


        // Total Products

        console.log("Total Products:", products.length)


        // Electronics

        let electronics = products.filter(function(product) {

            return product.category == "electronics"

        })

        console.log("Electronics:", electronics.length)


        // Jewelery

        let jewelery = products.filter(function(product) {

            return product.category == "jewelery"

        })

        console.log("Jewelery:", jewelery.length)


        // Men's Clothing

        let mens = products.filter(function(product) {

            return product.category == "men's clothing"

        })

        console.log("Men's Clothing:", mens.length)


        // Women's Clothing

        let womens = products.filter(function(product) {

            return product.category == "women's clothing"

        })

        console.log("Women's Clothing:", womens.length)


        // Highest Price

        let highest = products[0]

        for (let product of products) {

            if (product.price > highest.price) {

                highest = product

            }

        }

        console.log("Highest Price: $" + highest.price)


        // Lowest Price

        let lowest = products[0]

        for (let product of products) {

            if (product.price < lowest.price) {

                lowest = product

            }

        }

        console.log("Lowest Price: $" + lowest.price)


        // Average Price

        let total = products.reduce(function(sum, product) {

            return sum + product.price

        }, 0)

        let average = total / products.length

        console.log("Average Price: $" + average)

    }


    dashboard()

})

----------------------------------------------------------------------------*/

// ============================== TASK 3 ==============================

/*-------------------------------------------------------------------

let userApi = fetch("https://jsonplaceholder.typicode.com/users")

let postApi = fetch("https://jsonplaceholder.typicode.com/posts")


let userData = userApi.then(function(response) {

    return response.json()

})


let postData = postApi.then(function(response) {

    return response.json()

})


// Users

userData.then(function(users) {


    // Display all names

    let names = users.map(function(user) {

        return user.name

    })

    console.log("User Names:", names)


    // Name + Email

    users.forEach(function(user) {

        console.log(user.name, user.email)

    })


    // Find ID 5

    let userFive = users.find(function(user) {

        return user.id == 5

    })

    console.log("User ID 5:", userFive)


    // Particular city

    let cityUsers = users.filter(function(user) {

        return user.address.city == "Roscoeview"

    })

    console.log("Users from Roscoeview:", cityUsers)

})


// Posts

postData.then(function(posts) {


    // Posts by user ID 1

    let userOnePosts = posts.filter(function(post) {

        return post.userId == 1

    })

    console.log("Posts by User 1:", userOnePosts)


    // Count posts

    console.log("Total Posts by User 1:", userOnePosts.length)


    // First title greater than 50 characters

    let longTitle = posts.find(function(post) {

        return post.title.length > 50

    })

    console.log("First Long Title:", longTitle)

})

--------------------------------------------------------------------------------*/

// ============================== TASK 4 ==============================

/*--------------------------------------------------------------------------------

let api4 = fetch("https://fakestoreapi.com/products")


api4
.then(function(response) {

    return response.json()

})
.then(function(products) {


    let wantedCategory = prompt("Enter product category:")

    let maximumPrice = Number(prompt("Enter maximum price:"))


    let result = products.filter(function(product) {

        return product.category == wantedCategory &&
               product.price <= maximumPrice

    })


    console.log("Matching Products:", result)

})

-------------------------------------------------------------------------*/

// ============================== TASK 5 ==============================

let api5 = fetch("https://fakestoreapi.com/products")


api5
.then(function(response) {

    return response.json()

})
.then(function(products) {


    // Display products

    products.forEach(function(product) {

        console.log(
            product.id,
            product.title,
            "$" + product.price
        )

    })


    // Create cart

    let cart = []


    // Ask product IDs

    let firstId = Number(prompt("Enter first product ID:"))

    let secondId = Number(prompt("Enter second product ID:"))


    // Find products

    let firstProduct = products.find(function(product) {

        return product.id == firstId

    })


    let secondProduct = products.find(function(product) {

        return product.id == secondId

    })


    // Add to cart

    if (firstProduct) {

        cart.push(firstProduct)

    }


    if (secondProduct) {

        cart.push(secondProduct)

    }


    console.log("Cart:", cart)


    // Calculate total

    let cartTotal = cart.reduce(function(total, product) {

        return total + product.price

    }, 0)


    // Discount

    let discount = 0

    if (cartTotal > 200) {

        discount = cartTotal * 20 / 100

    }

    else if (cartTotal > 100) {

        discount = cartTotal * 10 / 100

    }


    let finalAmount = cartTotal - discount


    console.log("===== CART =====")
    console.log("Total:", cartTotal)
    console.log("Discount:", discount)
    console.log("Final Amount:", finalAmount)

})



// ============================== TASK 6 ==============================

let api6 = fetch("https://fakestoreapi.com/products")


api6
.then(function(response) {

    return response.json()

})
.then(function(products) {


    console.log("========== PRODUCT REPORT ==========")


    // Total Products

    console.log("Total Products:", products.length)


    // Display all products

    products.forEach(function(product) {

        console.log(product.title)

    })


    // Product Names

    let names = products.map(function(product) {

        return product.title

    })

    console.log("Product Names:", names)


    // Products above $100

    let expensive = products.filter(function(product) {

        return product.price > 100

    })

    console.log("Products Above $100:", expensive)


    // Electronics Product

    let electronics = products.find(function(product) {

        return product.category == "electronics"

    })

    console.log("Electronics Product:", electronics)


    // Total Product Value

    let totalValue = products.reduce(function(total, product) {

        return total + product.price

    }, 0)

    console.log("Total Product Value:", totalValue)


    // Any product above $500

    let above500 = products.some(function(product) {

        return product.price > 500

    })

    console.log("Any Product Above $500:", above500)


    // Every product above $1

    let aboveOne = products.every(function(product) {

        return product.price > 1

    })

    console.log("All Products Above $1:", aboveOne)


    // Highest to Lowest

    products.sort(function(a, b) {

        return b.price - a.price

    })


    console.log("Highest to Lowest:", products)

})
.catch(function(error) {

    console.log("API Error:", error)

})
.finally(function() {

    console.log("Product Report Completed")

})