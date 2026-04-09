const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/tanushikxdt2012_gmail_com", (req, res) => {
    const { x, y } = req.query;

    if (
        x === undefined || y === undefined ||
        !/^\d+$/.test(x) || !/^\d+$/.test(y)
    ) {
        res.set("Content-Type", "text/plain");
        return res.end("NaN");
    }

    const a = BigInt(x);
    const b = BigInt(y);

    function gcd(a, b) {
        while (b !== 0n) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    function lcm(a, b) {
        if (a === 0n || b === 0n) return 0n;
        return (a * b) / gcd(a, b);
    }

    const result = lcm(a, b);

    res.set("Content-Type", "text/plain");
    res.end(result.toString());
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});