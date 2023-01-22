
const datefan = () =>{


    // date and time ke liye 

    const d = new Date();
    

    // only time ke liye 

    // const d = new Date().toLocaleTimeString();


    // only date ke liye 

    // const d = new Date().toLocaleDateString();
    document.getElementById('demo').innerHTML = d;
}; 

// function datefan() {
//     var d = new Date();
//     d.setHours(0);
//     document.getElementById("demo").innerHTML = d;
// }