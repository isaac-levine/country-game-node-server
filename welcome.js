const Welcome = (app) => {
  app.get("/", (req, res) => {
    res.send("Welcome to Country Game API!");
  });
};
export default Welcome;
