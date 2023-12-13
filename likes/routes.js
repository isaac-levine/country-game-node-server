import * as dao from "./dao.js";

function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    console.log("findAllLikes");
    const likes = await dao.findAllLikes();
    res.send(likes);
  };
  app.get("/api/likes", findAllLikes);
  const createUserLikesCountry = async (req, res) => {
    console.log("createUserLikesCountry");
    const user = req.session.user;
    const countryCode = req.params.countryCode;
    const likes = await dao.createUserLikesCountry(user, countryCode);
    res.send(likes);
  };
  app.post("/api/likes/:countryCode", createUserLikesCountry);
  const findUsersWhoLikeCountry = async (req, res) => {
    console.log("findUsersWhoLikeCountry");
    const countryCode = req.params.countryCode;
    const likes = await dao.findUsersWhoLikeCountry(countryCode);
    res.send(likes);
  };
  app.get("/api/likes/:countryCode", findUsersWhoLikeCountry);
  const findCountriesUserLikes = async (req, res) => {
    console.log("findCountriesUserLikes");
    const user = req.session.user;
    const likes = await dao.findCountriesUserLikes(user);
    res.send(likes);
  };
  app.get("/api/likes/:user", findCountriesUserLikes);
  const UpdateUserLikesCountry = async (req, res) => {
    console.log("UpdateUserLikesCountry");
    const user = req.session.user;
    const countryCode = req.params.countryCode;
    const haveTraveledTo = req.body.haveTraveledTo;
    const onBucketList = req.body.onBucketList;
    const likes = await dao.UpdateUserLikesCountry(user, countryCode, haveTraveledTo, onBucketList);
    res.send(likes);
  };
  app.put("/api/likes/:countryCode", UpdateUserLikesCountry);
  const countriesUserHasTraveledTo = async (req, res) => {
    console.log("countriesUserHasTraveledTo");
    const user = req.session.user;
    const likes = await dao.countriesUserHasTraveledTo(user);
    res.send(likes);
  }
  app.get("/api/likes/traveled/:user", countriesUserHasTraveledTo);
  const countriesUserHasOnBucketList = async (req, res) => {
    console.log("countriesUserHasOnBucketList");
    const user = req.session.user;
    const likes = await dao.countriesUserHasOnBucketList(user);
    res.send(likes);
  }
  app.get("/api/likes/bucketlist/:user", countriesUserHasOnBucketList);
}

export default LikesRoutes;