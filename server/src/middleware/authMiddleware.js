// const jwt = require("jsonwebtoken");

// module.exports = function (req, res, next) {
//   console.log("auth middleware triggered");

//   const authHeader = req.headers.authorization;
//   console.log("Authorization Header:", authHeader);

//   const token = authHeader?.split(" ")[1];
// console.log(token);
//   if (!token) {
//     console.log("No token found in header");
//     return res.status(401).json({ msg: "No token, auth denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     console.log("Token decoded:", decoded);
//     next();
//   } catch (err) {
//     console.error("JWT verification failed:", err.message);
//     return res.status(401).json({ msg: "Token is not valid" });
//   }
// };

const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
