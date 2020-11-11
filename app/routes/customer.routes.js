module.exports = app => {
  const customers = require("../controllers/customer.controller.js");
 
    // By Ashish Ji 
    app.post("/addBankDetail", customers.addBankDetail);//add secondary bank
    app.post("/bankDetails", customers.showDetails);   //customers ->contrller, showDetails->method// get banks details by emailid 
    app.post("/productApi", customers.findAllProducts);//find all nse product
    app.post("/bankverify",customers.bankverify);
    app.post("/bankverify2",customers.bankverify2);
    app.get("/users/:emailId", customers.findOne1users);
    app.get("/getNSEBank", customers.getnsebank);
    app.post("/readFatca1",customers.readFatca1_nov);
};
