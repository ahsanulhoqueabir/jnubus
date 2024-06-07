const Stoppage = require("../model/stoppage.js");

const add = async (req, res) => {
  try {
    const stoppage = new Stoppage(req.body);
    await stoppage.save();
    res.status(201).send(stoppage);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const get = async (req, res) => {
  try {
    const stoppage = await Stoppage.find()
      .sort({
        name: 1,
      })
      .populate("buses", {
        createdAt: 0,
        updatedAt: 0,
        __v: 0,
        route: 0,
      });
    res.status(200).send(stoppage);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const getById = async (req, res) => {
  try {
    const stoppage = await Stoppage.findById(req.params.id)
      .populate({
        path: "buses",
        select: "-createdAt -updatedAt -__v ",
        populate: {
          path: "route",
          select: "-createdAt -updatedAt -__v -buses",
          populate: {
            path: "stoppage.point",
            select: "-createdAt -updatedAt -__v -buses",
          },
        },
      })
      .populate({
        path: "buses",
        select: "-createdAt -updatedAt -__v",
        populate: {
          path: "driver",
          select: "-createdAt -updatedAt -__v -bus",
        },
      });
    if (!stoppage) {
      return res.status(404).send();
    }
    res.status(200).send(stoppage);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
const stoppagebasic = async (req, res) => {
  try {
    const stoppage = await Stoppage.find();
    let name = [],
      ID = [],
      info = [];
    stoppage.map((item) => {
      name.push(item.name);
      ID.push(item._id);
      info.push({
        name: item.name,
        ID: item._id,
      });
    });
    if (!stoppage) {
      return res.status(404).send();
    }
    res.status(200).send({
      name,
      ID,
      info,
    });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
const queryData = async (req, res) => {
  try {
    const query = req.query.name;
    const stoppage = await Stoppage.find();
    let results = [];
    stoppage.map((st) => {
      if (st.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) {
        results.push(st);
      }
    });
    if (!stoppage) {
      return res.status(404).send();
    }
    res.status(200).send(results);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};
module.exports = {
  add,
  get,
  getById,
  stoppagebasic,
  queryData,
};
