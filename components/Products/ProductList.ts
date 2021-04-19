import type { Product } from '@/types/Product'
import { CoinStep } from '@/content/products/CoinStep'
import { PenguinNews } from '@/content/products/PenguinNews'

// note: productsの記事を追加するにはここに要素を追加する
export const productList: ReadonlyArray<Product> = [PenguinNews, CoinStep]
