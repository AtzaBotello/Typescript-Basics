
interface IResolvedData {
    status: string,
    data: number[]
};

async function fetchData(url: string): Promise<IResolvedData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(url === "success") {
                resolve({
                    status: "success",
                    data: [1,2,3,4,5]
                })
            } else {
                reject("Cannot handle the api response now");
            }
        }, 2000)
    })
}

async function processData(data: IResolvedData): Promise<number[]> {
    const processedData = data.data.map((number: number) => number * 2 );
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(processedData);
        }, 1000)
    })
}

async function displayData(data: number[]): Promise<void> {
    return new Promise((resolve) => {
        resolve(console.log(data));
    });
}

async function fetchAndProcessData(url: string) {
    try {
        const data = await fetchData(url);
        const dataProcessed = await processData(data);
        displayData(dataProcessed);
    } catch (error) {
        console.error("Error: ", error);
    }
}

fetchAndProcessData("success");