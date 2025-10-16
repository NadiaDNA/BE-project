const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    try {
      const header = req.header("Authorization");
      if (!header) {
        res.json("invalid header");
        return;
      }

      // Bearer aksjdliqhe08yc08
      const token = header.split(" ")[1];

      if (!token) {
        res.json("invalid token");
        return;
      }

      const decoded = jwt.verify(token, "sadlkfnojhboiwnvccpvisnvpirwenhipn");
      if (!decoded) {
        res.json("invalid token");
        return;
      }

      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({
        message: e.message
      })
    }
  },
  verifyAdmin: (req, res, next) => {
    try {
      const { id, name, email } = req.user;
      if (email !== "admin@example.com") {
        res.json("you are not admin");
        return;
      }
      next();
    } catch (e) {
      res.status(400).json({
        message: e.message
      })
    }
  }
}