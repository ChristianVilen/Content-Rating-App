import axios from 'axios'

const apiUrl = 'https://gentle-bastion-17047.herokuapp.com/'
// const apiUrl = 'http://localhost:8000/'

export const getData = async (limit) => {
  return await axios
    .get(apiUrl, {
      params: {
        limit,
      },
    })
    .then((res) => {
      return res.data
    })
    .catch((err) => console.error(err))
}

export const getTopTen = async () => {
  return await axios
    .get(`${apiUrl}top`)
    .then((res) => {
      return res.data
    })
    .catch((err) => console.error(err))
}

export const updateData = (data, review) => {
  const param = data._id
  const postData = {
    ...data,
    review,
  }
  return axios
    .put(apiUrl, postData, {
      params: {
        param,
      },
    })
    .then((r) => r.data)
    .catch((e) => console.error('from rew', e))
}
