import axiosClient from './axiosClient'

const serviceStatisticApi = {
  getChart() {
    return axiosClient.get(`/store-revenue`)
  },
}

export default serviceStatisticApi
