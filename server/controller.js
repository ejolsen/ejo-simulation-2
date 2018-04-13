module.exports = {

    getAllHouses: ( req, res, next ) => {
        req.app.get('db').select_all_houses()
          .then(houses => { res.status(200).send(houses); })
          
    },

    createHouse: (req, res, next) => {
        const {name, address, city, state, zip} = req.body
        req.app.get('db').create_house([name, address, city, state, zip])
        .then(() => {res.status(200).send(response)
        .catch(() => res.status(500).send())
        });
    }
}