app.get("/tanushikxdt2012_gmail_com", (req, res) => {
    const x = req.query.x;
    const y = req.query.y;

    if (
        x === undefined || y === undefined ||
        !/^\d+$/.test(x) || !/^\d+$/.test(y)
    ) {
        return res.type("text/plain").send("NaN");
    }

    const a = BigInt(x);
    const b = BigInt(y);

    function gcd(a, b) {
        while (b !== 0n) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function lcm(a, b) {
        if (a === 0n || b === 0n) return 0n;
        return (a * b) / gcd(a, b);
    }

    const result = lcm(a, b);

    res.type("text/plain");
    res.send(result.toString());
});