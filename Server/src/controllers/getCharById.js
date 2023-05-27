const { Character } = require("../DB_connection");

const getCharById = async (req, res) => {
  let { id } = req.params;
  const aux = +id;

  try {
    let data = await Character.findByPk(aux);
    
    if (data) {
      ({ id, name, gender, species, origin, image, status } = data);
      res
        .status(200)
        .json({ id, name, gender, species, origin, image, status });
    } else {
      res.status(200).send("no se encontro personaje con ese id");
    }
  } catch (reason) {
    if (reason.status === 404) {
      res.status(404).send("Not found");
    } else {
      res.status(500).json({ message: reason.message });
    }
  }

  /*.catch(() => {
      res.status(404).send("Not fount.");
    })

    .catch((reason) => {
      res.status(500).send(reason.massega);
    });*/

  /////// con if//////
};

module.exports = getCharById;

/*//////////////////////////////////////////////
version con NODE puro
const axios = require("axios")

const getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((resp) => {({ id, name, gender, species, origin, image, status } = resp.data)
   
      res
        .writeHead(200, { "Content-Type": "application/json" })
        .end(JSON.stringify({ id, name, gender, species, origin, image, status }))
}) 
    .catch((reason) => res.writeHead(500, { "Content-type": "text/plain" }).end(reason.message));
    
};
*/
