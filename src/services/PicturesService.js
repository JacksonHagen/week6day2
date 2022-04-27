import { AppState } from "../AppState.js"
import { Picture } from "../models/Picture.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

const params = {
  api_key: 'SnaKnh99p1zUSYsf7N8aW3wDJSRbW6oeShQSRasK',
  query: '',
}

class PicturesService {
  async search(query) {
    params.query = query
    const res = await api.get('apod?', params)
    logger.log(res.data)
  }
  async getPOD() {
    const res = await api.get('apod?api_key='+params.api_key)
    logger.log('get pod', res.data)
    AppState.activePicture = new Picture(res.data)
  }
}

export const picturesService = new PicturesService()