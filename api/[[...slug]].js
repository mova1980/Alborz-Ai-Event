import { handleApi } from '../server/router.js'

export default async function handler(req, res) {
  return handleApi(req, res)
}
