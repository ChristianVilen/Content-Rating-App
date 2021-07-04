import axios from 'axios'

const apiUrl = 'http://localhost:8000/'

export const getData = async () => {
  return await axios
    .get(apiUrl)
    .then((res) => res.data)
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
