import * as dao from "./dao.js";

function FollowsRoutes(app) {
  const findAllFollows = async (req, res) => {
    const follows = await dao.findAllFollows();
    if (follows) {
      res.send(follows);
    } else {
      res.status(404).send({ message: "No follows found" });
    }
  };
  
  const createUserFollowsUser = async (req, res) => {
    const { followerId, followedId } = req.params;
    const follow = await dao.createUserFollowsUser(followerId, followedId);
    res.send(follow);
  };

  const deleteUserFollowsUser = async (req, res) => {
    const { followerId, followedId } = req.params;
    const status = await dao.deleteUserFollowsUser(followerId, followedId);
    res.send(status);
  };

  const findUsersFollowedByUser = async (req, res) => {
    const { userId } = req.params;
    const following = await dao.findUsersFollowedByUser(userId);
    if (following) {
      res.send(following);
    } else {
      res.status(404).send({ message: "No users found" });
    }
  };
  
  const findUsersFollowingUser = async (req, res) => {
    const { userId } = req.params;
    const followers = await dao.findUsersFollowingUser(userId);
    if (followers) {
      res.send(followers);
    } else {
      res.status(404).send({ message: "No users found" });
    }
  };

  app.get("/api/follows", findAllFollows);
  app.post("/api/users/:followerId/follows/:followedId", createUserFollowsUser);
  app.delete(
    "/api/users/:followerId/follows/:followedId",
    deleteUserFollowsUser
  );
  app.get("/api/users/:userId/following", findUsersFollowedByUser);
  app.get("/api/users/:userId/followers", findUsersFollowingUser);
}

export default FollowsRoutes;