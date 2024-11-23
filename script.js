//your JS code here. If required.
// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(promiseName) {
    const timeTaken = Math.random() * 2 + 1; // Random time between 1 and 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: promiseName, time: timeTaken });
        }, timeTaken * 1000);
    });
}

// Create an array of promises
const promises = [
    createRandomPromise('Promise 1'),
    createRandomPromise('Promise 2'),
    createRandomPromise('Promise 3')
];

// Get the table body element
const tableBody = document.getElementById('output');

// Start processing promises
Promise.all(promises).then(results => {
    // Remove loading text
    tableBody.innerHTML = '';

    // Calculate total time taken
    const totalTime = results.reduce((acc, result) => acc + result.time, 0);

    // Populate the table with results
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${result.name}</td><td>${result.time.toFixed(3)}</td>`;
        tableBody.appendChild(row);
    });

    // Add total row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    tableBody.appendChild(totalRow);
});