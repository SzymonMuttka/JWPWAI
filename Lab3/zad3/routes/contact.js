module.exports = function(req, res) {
    res.end(`
        <h1>Kontakt</h1>
        <p>Napisz do mnie: mail@example.com</p>
        <a href="/">Home</a> |
        <a href="/about">O stronie</a> |
        <a href="/contact">Kontakt</a>
    `);
};
