module.exports = function(req, res) {
    res.end(`
        <h1>O stronie</h1>
        <p>Strona została stworzona w node.js przy użyciu modułu "http".</p>
        <a href="/">Home</a> |
        <a href="/about">O stronie</a> |
        <a href="/contact">Kontakt</a>
    `);
};
