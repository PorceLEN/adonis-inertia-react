import { Product } from '#models/product'
import { productValidator } from '#validators/product'
import { HttpContext } from '@adonisjs/core/http'

export default class ProductController {
  async index({ inertia }: HttpContext) {
    return inertia.render('market/products', {})
  }

  async store({ request }: HttpContext) {
    const payload = await request.validateUsing(productValidator)
    await Product.create({ ...payload })
  }
}
