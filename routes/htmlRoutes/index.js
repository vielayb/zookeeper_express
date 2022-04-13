const path = require('path')
const router = require('express').Router();



//==========================================================
// creating a route so index.html can be served in our server
//==========================================================
router.get('/', (req, res) => { // the '/' refers to the root of the route
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});
  
//==========================================================
// creating a route so animals.html can be served in our server
//==========================================================
  router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});
  
//==========================================================
// creating a route so zookeepers.html can be served in our server
//==========================================================
  router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});
  
//==========================================================
// creating a wildcard route to capture request that doesn't exist
//==========================================================
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;