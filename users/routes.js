import * as dao from "./dao.js";

function userRoutes(app) {
    const createUser = async (req, res) => {
        const user = await dao.createUser(req.body);
        res.json(user);
    };
    app.post("/api/users", createUser);

    const signup = async (req, res) => {
        const user = await dao.findUserByUsername(
            req.body.username);
        if (user) {
            res.status(400).json(
                { message: "Username already taken" });
        } else {
            const currentUser = await dao.createUser(req.body);
            req.session['currentUser'] = currentUser;
            res.json(currentUser);
        }
    };
    app.post("/api/users/signup", signup);

    const signin = async (req, res) => {
        const { username, password } = req.body;
        const currentUser = await dao.findUserByCredentials(username, password);
        if (currentUser) {
            req.session['currentUser'] = currentUser;
            res.json(currentUser);
        }
        else {
            res.status(400).json({ message: "Invalid credentials" });
        }
    };
    app.post("/api/users/signin", signin);
    
    const signout = (req, res) => {
        req.session.destroy();
        res.json(200);
      };
    app.post("/api/users/signout", signout);

    const findUserById = async (req, res) => {
        const user = await dao.findUserById(req.params.userId);
        res.json(user);
      };
    app.get("/api/users/:userId", findUserById);

    const account = async (req, res) => {
        res.json(req.session['currentUser']);
      };
    app.post("/api/users/profile", account);
}


export default userRoutes;