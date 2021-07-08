const DataModel = require('../dataModel')

exports.getCategories = async (req, res) => {
  try {
    const data = await DataModel.find().sort('topic')
    // Find all different topics and store in map
    const unique = [...new Set(data.map((item) => item.topic))]
    // Remove nulls and undefined values
    res.json(unique.filter((i) => i != null))
  } catch (err) {
    res.json({ message: err })
  }
}

exports.getCategory = async (req, res) => {
  const category = req.params.category
  try {
    const data = await DataModel.find().where('topic').equals(category)
    res.json(data)
  } catch (err) {
    res.json({ message: err })
  }
}
