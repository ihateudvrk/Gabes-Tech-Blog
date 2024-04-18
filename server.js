// Importing sequelize configuration
const sequelize = require("./config/connection");
// Importing connect-session-sequelize to save session into database
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Initializing express application
const app = express();
// Setting up the port for the server
const PORT = process.env.PORT || 3001;

// Configuring Handlebars.js with custom helpers
const hbs = exphbs.create({ helpers });

// Configuring session properties
const sess = {
  secret: "Super secret secret", // Secret key for session
  cookie: {
    maxAge: 1200000, // Cookie expiration time
    httpOnly: true, // Cookie can only be accessed by the web server
    secure: false, // Cookie can be transmitted over unsecured connections
    sameSite: "strict", // Cookie will only be sent in a first-party context
  },
  resave: false, // Don't save session if unmodified
  saveUninitialized: true, // Don't create session until something stored
  store: new SequelizeStore({ // Session store configuration
    db: sequelize,
  }),
};

// Using session middleware
app.use(session(sess));

// Setting up Handlebars.js as the template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Setting up middleware
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, "public"))); // For serving static files

// Using routes middleware
app.use(routes);

// Synchronizing sequelize models with the database
sequelize.sync({ force: false }).then(() => {
  // Starting the server
  app.listen(PORT, () => console.log("Now listening"));
});