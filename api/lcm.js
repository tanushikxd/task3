export default function handler(req, res) {
    const { x, y } = req.query;

    // Validate
    if (
        x === undefined || y === undefined ||
        !/^\d+$/.test(x) || !/^\d+$/.test(y)
    ) {
        res.setHeader("Content-Type", "text/plain; charset=utf-8");
        return res.status(200).end("NaN");
    }

    const a = Number(x);
    const b = Number(y);

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function lcm(a, b) {
        if (a === 0 || b === 0) return 0;
        return Math.abs(a * b) / gcd(a, b);
    }

    const result = lcm(a, b);

    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).end(String(result));
}