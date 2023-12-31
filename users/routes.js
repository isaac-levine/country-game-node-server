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
        const currentUser = req.session['currentUser'];
        if (currentUser) {
            res.json(currentUser);
        } else {
            res.status(400).json({ message: "Not logged in" });
        }
    };
    app.post("/api/users/profile", account);

    const updateUser = async (req, res) => {
        const { userId } = req.params;
        const status = await dao.updateUser(userId, req.body);
        res.json(status);
      };
    
    app.put("/api/users/:userId", updateUser);

    const findAllUsers = async (req, res) => {
        const users = await dao.findAllUsers();
        res.json(users);
    };
    app.get("/api/users", findAllUsers);

    const deleteUser = async (req, res) => {
        const status = await dao.deleteUser(req.params.userId);
        res.json(status);
    };
    app.delete("/api/users/:userId", deleteUser);
}



export default userRoutes;