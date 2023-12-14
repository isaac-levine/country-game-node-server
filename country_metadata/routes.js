import * as dao from "./dao.js";
import * as likesDao from "../likes/dao.js";

function CountryRoutes(app) {
    const findAllCountryMetadata = async (req, res) => {
        const countryMetadata = await dao.getCountryMetadata();
        res.json(countryMetadata);
    }
    app.get("/api/country_metadata", findAllCountryMetadata);
    const findCountryMetadataById = async (req, res) => {
        const countryMetadata = await dao.getCountryMetadataById(req.params.id);
        res.json(countryMetadata);
    }
    app.get("/api/country_metadata/:id", findCountryMetadataById);
    // const updateCountryMetadata = async (req, res) => {
    //     const haveTraveledTo = await likesDao.getTraveledToByCountry(req.params.countryCode);
    //     const onBucketList = await likesDao.getBucketListByCountry(req.params.countryCode);
    //     const numHaveTraveledTo = haveTraveledTo.length;
    //     const numOnBucketList = onBucketList.length;
    //     const update = await dao.updateCountryMetadata(req.params.id, numHaveTraveledTo, numOnBucketList);
    // }
    // app.put("/api/country_metadata/:id", updateCountryMetadata);
}
export default CountryRoutes;