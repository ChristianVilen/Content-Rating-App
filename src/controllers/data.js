const DataModel = require('../dataModel')

exports.getAll = async (req, res) => {
  let limit = req.query.limit
  try {
    const data = await DataModel.find().limit(limit * 10)
    res.json(data)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.postData = async (req, res) => {
  const data = new DataModel({
    id: req.body.id,
    mediaType: req.body.mediaType,
    title: req.body.title,
    description: req.body.description,
    source: req.body.source,
    contentUrl: req.body.contentUrl,
    previewUrl: req.body.previewUrl,
  })

  try {
    await data.save()
    res.sendStatus(200)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.putData = async (req, res) => {
  try {
    const updatedData = await DataModel.findByIdAndUpdate(
      req.query.param,
      {
        $set: {
          id: req.body.id,
          mediaType: req.body.mediaType,
          title: req.body.title,
          description: req.body.description,
          source: req.body.source,
          contentUrl: req.body.contentUrl,
          previewUrl: req.body.previewUrl,
          review: {
            rating: req.body.review.rating,
            reviewText: req.body.review.reviewText,
          },
        },
      },
      { new: true }
    )
    res.json(updatedData)
  } catch (err) {
    res.json({ message: err })
  }
}

exports.getTop = async (req, res) => {
  try {
    const data = await DataModel.find().sort({ 'review.rating': -1 }).limit(10)
    res.json(data)
  } catch (err) {
    res.json({ message: err })
  }
}
