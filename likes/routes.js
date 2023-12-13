import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    console.log("findAllLikes");
    const likes = await dao.findAllLikes();
    res.send(likes);
  };
  const createUserLikesAlbum = async (req, res) => {
    const { userId, CO } = req.params;
    const like = await dao.createUserLikesAlbum(userId, CO);
    if (like) {
        res.send(like);
    } else {
        res.status(404).send("Not found");
    }
  };
  const findAlbumsUserLikes = async (req, res) => {
    const { userId } = req.params;
    const likes = await dao.findAlbumsUserLikes(userId);
    res.send(likes);
  };
  const findUsersWhoLikeAlbum = async (req, res) => {
    const { CO } = req.params;
    const likes = await dao.findUsersWhoLikeAlbum(CO);
    res.send(likes);
  };

  app.get("/api/likes", findAllLikes);
  app.post("/api/users/:userId/likes/:CO", createUserLikesAlbum);
  app.get("/api/users/:userId/likes", findAlbumsUserLikes);
  app.get("/api/albums/:CO/likes", findUsersWhoLikeAlbum);
}

export default LikesRoutes;