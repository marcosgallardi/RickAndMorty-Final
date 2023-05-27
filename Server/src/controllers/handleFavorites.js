const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, status, species, gender, origin, image, id } = req.body;

  try {
    if (!name || !status || !species || !gender || !origin || !image) {
      return res.status(401).json({ message: "Faltan datos" });
    }
    await Favorite.create({
      name,
      status,
      species,
      gender,
      origin,
      image,
      id,
    });

    // User.addFavorites()
    const favorites = await Favorite.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
  /* try {
    let { id, name, image, species, status, gender, origin } = req.body;

    let newFav = await Favorite.create({
      id,
      name,
      image,
      species,
      status,
      gender,
      origin,
    });

    res.status(200).json(newFav);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/
};
const deleteFav = async (req, res) => {
  const { id } = req.params;
  try {
    await Favorite.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({ message: "Favorite deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { postFav, deleteFav };
