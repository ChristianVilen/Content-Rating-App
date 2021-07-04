import axios from 'axios'

const apiUrl = 'http://localhost:8000/'

export const getData = async () => {
  return axios
    .get(apiUrl)
    .then((res) => res.data)
    .catch((err) => console.error(err))
}

export const updateData = (data) => {
  return axios
    .put(apiUrl, data)
    .then((r) => r.data)
    .catch((e) => console.error('from rew', e))
}
