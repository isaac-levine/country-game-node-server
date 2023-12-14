import * as dao from "./dao.js";
import * as userdao from "../users/dao.js";
function LikesRoutes(app) {
  const findAllLikes = async (req, res) => {
    console.log("findAllLikes");
    const likes = await dao.findAllLikes();
    res.send(likes);
  };
  app.get("/api/likes", findAllLikes);
  const createUserLikesCountry = async (req, res) => {
    const userId = req.params.userId;
    const countryCode = req.params.countryCode;
    const countryName = req.params.countryName;
    console.log("createUserLikesCountry " + countryName);
    const likes = await dao.createUserLikesCountry(userId, countryCode, countryName);
    //const metaData = await metaDataDao.getCountryMetadataById(countryCode);
    // console.log("about to do metadata stuff");
    // if(metaData == null) {
    //   const createdCountryMetadata = await metaDataDao.createCountryMetadata({countryCode: countryCode, countryName: countryName, haveTraveledTo: 0, onBucketList: 0});
    //   console.log("createdCountryMetadata " + createdCountryMetadata);
    //}
    res.send(likes);
  };
  app.post("/api/likes/user/:userId/country/:countryCode/name/:countryName", createUserLikesCountry);
  const findUsersWhoHaveTraveledToCountry = async (req, res) => {
    console.log("findUsersWhoHaveTraveledToCountry");
    const countryCode = req.params.countryCode;
    const likes = await dao.findUsersWhoHaveTraveledToCountry(countryCode);
    const userNames = [];
    for (let i = 0; i < likes.length; i++) {
      const user = await userdao.findUserById(likes[i].userId);
      userNames.push({"name" : user.username, "userId" : user._id});
    }
    res.send(userNames);
  };
  app.get("/api/likes/traveledTo/country/:countryCode", findUsersWhoHaveTraveledToCountry);
  const findUsersWhoHaveCountryOnBucketList = async (req, res) => {
    console.log("findUsersWhoHaveCountryOnBucketList");
    const countryCode = req.params.countryCode;
    const likes = await dao.findUsersWhoHaveCountryOnBucketList(countryCode);
    const userNames = [];
    for (let i = 0; i < likes.length; i++) {
      const user = await userdao.findUserById(likes[i].userId);
      userNames.push({"name" : user.username, "userId" : user._id});
    }
    res.send(userNames);
  };
  app.get("/api/likes/bucketList/country/:countryCode", findUsersWhoHaveCountryOnBucketList);
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
    console.log("country code: " + countryCode);
    const likes = await dao.UpdateUserLikesCountry(userId, countryCode, haveTraveledTo, onBucketList);
    res.send(likes);
    // const TotalHaveTraveledTo = await dao.getTraveledToByCountry(countryCode);
    // const TotalOnBucketList = await dao.getBucketListByCountry(countryCode);
    // const numHaveTraveledTo = TotalHaveTraveledTo.length;
    // const numOnBucketList = TotalOnBucketList.length;
    // const update = await metaDataDao.updateCountryMetadata(countryCode, numHaveTraveledTo, numOnBucketList);
    // console.log(update);
  };
  app.put("/api/likes/user/:userId/country/:countryCode/:haveTraveledTo/:onBucketList", UpdateUserLikesCountry);

  const countriesUserHasTraveledTo = async (req, res) => {
    console.log("countriesUserHasTraveledTo");
    const userId = req.params.userId;
    const likes = await dao.countriesUserHasTraveledTo(userId);
    res.send(likes);
  }
  app.get("/api/likes/traveled/user/:userId", countriesUserHasTraveledTo);
  const countriesUserHasOnBucketList = async (req, res) => {
    console.log("countriesUserHasOnBucketList");
    const userId = req.params.userId;
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