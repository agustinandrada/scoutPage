const homeController = require("../controllers/homeController");

const homeHandler = async (req, res) => {
  try {
    let home = await homeController();
    res.status(200).json(home);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  homeHandler,
};
