console.log('This is localstorage tutorial');
let imparr = ['banana','orange','bhindi'];

// Add a key value pair inside local storage
localStorage.setItem('Name', 'Abhi');
localStorage.setItem('Name2', 'shubh');
localStorage.setItem('fruits', JSON.stringify(imparr));

//clear a particular key-value pair
localStorage.removeItem('Name2');

//Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
console.log(name);
let fname = JSON.parse(localStorage.getItem('fruits'));
console.log(fname);

//Clear the entire local storage
// localstorage.clear();

//Session Storage

sessionStorage.setItem('sessionName2', 'shubh');
sessionStorage.setItem('sessionName', 'Abhi');
sessionStorage.setItem('sessionfruits', JSON.stringify(imparr));
