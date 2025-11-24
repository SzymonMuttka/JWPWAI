module.exports = function(req, res) {
    res.end(`
        <h1>Strona główna</h1>
        <p>Witaj na stronie głównej!</p>
        <a href="/">Home</a> |
        <a href="/about">O stronie</a> |
        <a href="/contact">Kontakt</a>
    `);
};
