import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello World</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #fff;
    }
    .card {
      text-align: center;
      padding: 48px 64px;
      background: rgba(255, 255, 255, 0.12);
      border-radius: 20px;
      backdrop-filter: blur(10px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }
    h1 {
      font-size: 4rem;
      font-weight: 700;
      letter-spacing: -1px;
      margin-bottom: 12px;
    }
    p {
      font-size: 1.1rem;
      opacity: 0.9;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, World! 👋</h1>
    <p>Served by Node.js + Express · Deployed on Vercel</p>
  </div>
</body>
</html>`);
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;
