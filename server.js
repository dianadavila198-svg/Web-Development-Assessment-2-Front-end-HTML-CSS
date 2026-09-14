//------Express import------//
const express = require('express'); // Import Express
const app = express(); //create a new app instance
let totalOrders = [];//This array will store all borrow entries

// --- MIDDLEWARE---//
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true })); //Translates incoming form data into a JavaScript object (req.body)

// --- ROUTES---//
app.post('/order', (req, res) => {
    const { plantName, quantity } = req.body;

    // Check if fields are missing
    if (!plantName || !quantity) {
    return res.redirect('/error.html');

    }

    //Check if days is 0 or less
    if (parseInt(quantity)<= 0) {
    return res.redirect('/error.html');
    }

    //Check data entry
    const newEntry = {
        plantName: plantName, 
        quantity: parseInt(quantity),
    };
    //Store record in the array
    totalOrders .push(newEntry)

    //Print to terminal 
    console.log('Current Order:', totalOrders );

    //Redirect on sucess 
    return res.redirect(`/success.html?plantName=${plantName}&quantity=${quantity}`);
});

//Visualization of orders
app.get('/api/plants', (req, res) => {
    res.json(totalOrders );
});

// Start the server
     const PORT = 3000;
     app.listen(PORT, () => {
       console.log(`Server is running on port ${PORT}`);
     });
