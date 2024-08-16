// middleware/auth.js
const isAuthenticated = (req, res, next) => {
    if (req.session.userId) {
      // User is authenticated
      return next();
    } else {
      // User is not authenticated
      return res.status(401).send('Unauthorized');
    }
  };
  
  module.exports = isAuthenticated;
  