
const sendAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.usersArray));
}

module.exports = {
    sendAllUsers
}





