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
    const userId = req.params.userId;
    const countryCode = req.params.countryCode;
    const likes = await dao.createUserLikesCountry(userId, countryCode);
    res.send(likes);
  };
  app.post("/api/likes/user/:userId/country/:countryCode", createUserLikesCountry);
  const findUsersWhoLikeCountry = async (req, res) => {
    console.log("findUsersWhoLikeCountry");
    const countryCode = req.params.countryCode;
    const likes = await dao.findUsersWhoLikeCountry(countryCode);
    res.send(likes);
  };
  app.get("/api/likes/country/:countryCode", findUsersWhoLikeCountry);
  const findCountriesUserLikes = async (req, res) => {
    console.log("findCountriesUserLikes");
    const userId = req.params.userId;
    const likes = await dao.findCountriesUserLikes(userId);
    res.send(likes);
  };
  app.get("/api/likes/user/:userId", findCountriesUserLikes);
  const fetchUserLikesCountry = async (req, res) => {
    console.log("fetchUserLikesCountry");
    const userId = req.params.userId;
    const countryCode = req.params.countryCode;
    const likes = await dao.userLikesCountry(userId, countryCode);
    res.send(likes);
  }
  app.get("/api/likes/user/:userId/country/:countryCode", fetchUserLikesCountry);
  const UpdateUserLikesCountry = async (req, res) => {
    console.log("UpdateUserLikesCountry");
    const userId = req.params.userId;
    const countryCode = req.params.countryCode;
    const haveTraveledTo = req.params.haveTraveledTo;
    const onBucketList = req.params.onBucketList;
    console.log(haveTraveledTo);
    const likes = await dao.UpdateUserLikesCountry(userId, countryCode, haveTraveledTo, onBucketList);
    console.log(likes);
    res.send(likes);
  };
  app.put("/api/likes/user/:userId/country/:countryCode/:haveTraveledTo/:onBucketList", UpdateUserLikesCountry);
  const countriesUserHasTraveledTo = async (req, res) => {
    console.log("countriesUserHasTraveledTo");
    const userId = req.session.userId;
    const likes = await dao.countriesUserHasTraveledTo(userId);
    res.send(likes);
  }
  app.get("/api/likes/traveled/user/:userId", countriesUserHasTraveledTo);
  const countriesUserHasOnBucketList = async (req, res) => {
    console.log("countriesUserHasOnBucketList");
    const userId = req.session.userId;
    const likes = await dao.countriesUserHasOnBucketList(userId);
    res.send(likes);
  }
  app.get("/api/likes/bucketlist/user/:userId", countriesUserHasOnBucketList);
  const getTraveledToByCountry = async (req, res) => {
    console.log("getTraveledToByCountry");
    const countryCode = req.params.countryCode;
    console.log(countryCode);
    const likes = await dao.getTraveledToByCountry(countryCode);
    res.send(likes);
  }
  app.get("/api/likes/traveled/country/:countryCode", getTraveledToByCountry);
  const getBucketListByCountry = async (req, res) => {
    console.log("getBucketListByCountry");
    const countryCode = req.params.countryCode;
    const likes = await dao.getBucketListByCountry(countryCode);
    res.send(likes);
  }
  app.get("/api/likes/bucketlist/country/:countryCode", getBucketListByCountry);
}

export default LikesRoutes;