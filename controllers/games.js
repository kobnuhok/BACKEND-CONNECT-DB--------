
const sendAllGames = async (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(req.gamesArray));
}

module.exports = sendAllGames;






