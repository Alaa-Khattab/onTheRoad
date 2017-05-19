const ride = require('../../database/ridesHelpers.js');
module.exports = function rides(req, res) {
  ride.getRides((err, result) => {
    if (err) {
      return res.status(500).send('Something broke!')
    }
    res.json({
      msg: 'Get data successfully',
      statusCode: 200,
      data: result.rows
    })

  })
}
