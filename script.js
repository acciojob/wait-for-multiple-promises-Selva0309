//your JS code here. If required.
const getRandomDelay = () => Math.floor(Math.random() * 3) + 1;

const createPromise = (id) => {
    return new Promise((resolve) => {
        const delay = getRandomDelay();
        setTimeout(() => {
            resolve({ id: id, time: delay });
        }, delay * 1000);
    });
};

const promises = [
    createPromise('Promise 1'),
    createPromise('Promise 2'),
    createPromise('Promise 3')
];

Promise.all(promises).then((results) => {
    const table = document.getElementById('myTable');
    table.innerHTML = '';

    let totalTime = 0;
    results.forEach((result) => {
        totalTime += result.time;

        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = result.id;
        cell2.textContent = result.time;
    });

    const totalRow = table.insertRow();
    const totalCell1 = totalRow.insertCell(0);
    const totalCell2 = totalRow.insertCell(1);
    totalCell1.textContent = 'Total';
    totalCell2.textContent = totalTime.toFixed(3);
});