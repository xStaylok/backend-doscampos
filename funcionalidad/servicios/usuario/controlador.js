const logicaDB = require('./logicaDB');

const crearRegistroForm = async (req,res) => {
    let registroForm = req.body;
    try {
        let respuesta = await logicaDB.crearRegistroFormDB(registroForm);
        res.status(200).json({
            'registro': respuesta
        });
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
}

module.exports = {
    crearRegistroForm,
}