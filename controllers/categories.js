const sendAllCategories = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.categoriesArray));
}

module.exports = sendAllCategories






