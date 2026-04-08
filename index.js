const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Helper: GCD using Euclidean algorithm
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Helper: LCM
function lcm(a, b) {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
}

// Replace with your formatted email
app.get("/tanushikxdt2012_gmail_com", (req, res) => {
    const x = req.query.x;
    const y = req.query.y;

    // Validate integers
    if (
        x === undefined || y === undefined ||
        !/^\d+$/.test(x) || !/^\d+$/.test(y)
    ) {
        return res.send("NaN");
    }

    const a = Number(x);
    const b = Number(y);

    const result = lcm(a, b);

    res.status(200);
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.end(String(result).trim());
});

    return res.status(200).type("text/plain").end("NaN");

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});