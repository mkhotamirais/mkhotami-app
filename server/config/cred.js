const allowedOrigins = [
  "https://mkhotami-app.vercel.app",
  "https://mkhotamirais.my.id",
  "https://mkhotamirais.github.io",
  "https://mkhotami.vercel.app",
  "https://mkhotamirais.vercel.app",
  "http://127.0.0.1:5500",
  "http://localhost:3500",
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:5174",
];

const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Credentials", true);
  }
  next();
};

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

module.exports = { credentials, corsOptions };
