const express = require("express");
const admin = require("firebase-admin");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

/* Create Express App */
const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

const authenticate = async (req, res, next) => {
  const idToken =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!idToken) {
    return res.status(403).send("Unauthorized");
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);

    /* Check if the email is verified*/
    if (!decodedToken.email_verified) {
      return res.status(403).send("Email not verified");
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error verifying Firebase ID token:", error);
    return res.status(403).send("Unauthorized");
  }
};

// Public route
app.get("/public", (req, res) => {
  res.send("This is a public endpoint.");
});

// Secure route - Requires authentication and verified email
app.get("/secure/data", authenticate, (req, res) => {
  res.send(`This is secure data endpoint. Welcome ${req.user.email}`);
});

// Secure route - Requires authentication and verified email
app.get("/secure/user", authenticate, (req, res) => {
  res.send(`This is secure user endpoint. Welcome ${req.user.email}`);
});

// Finally starting the Server the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
