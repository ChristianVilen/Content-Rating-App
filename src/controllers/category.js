const DataModel = require('../dataModel')

exports.getCategories = async (req, res) => {
  try {
    const data = await DataModel.find().sort('topic')
    const unique = [
      ...new Set(
        data.map((item) => {
          return item.topic
        })
      ),
    ]
    res.json(unique)
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
