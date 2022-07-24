import { VercelRequest, VercelResponse } from '@vercel/node';
import { Product } from 'src/app/core/product';
import { ProductService } from 'src/app/product.service';


const findProduct = (id: number): Product | undefined =>
  ProductService.getProduct(id)

export default function fetchProductInfo(
  req: VercelRequest,
  res: VercelResponse
) {
  const id = Number(req.query.id);
  const product = findProduct(id);
  res.statusCode = 200;
  res.send({
    id: id,
    title: product?.title,
    price: product?.price,
    image: product?.image,
    url: `/products/${id}`,
  });
}
