function fetchData3(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "success") {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}

fetchData3("success")
    .then((data) => {
        console.log("Success: ", data);
    })
    .catch((error) => {
        console.error("Error: ", error);
    });



// Async await
async function fetchData2() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log("Data: ", data);
    } catch (error) {
        console.error("Error: ", error)
    }
}

// Error Handling

function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b
}

try {
    const result = divide(10, 0);
    console.log("Result: ", result);
} catch (error) {
    console.error("Error: ", error.message)
}