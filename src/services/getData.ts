import { axios } from 'hooks/worker'

const DATA_URL = '/data/response.json'

export const getDataApi = () => {
  return axios.get(DATA_URL)
}
