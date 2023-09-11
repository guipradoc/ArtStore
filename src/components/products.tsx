// PhotoGrid.tsx
import Image from 'next/image'
import Link from 'next/link'

interface PhotoGridProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Image src={product.imageUrl} width={700} height={700} alt="" />
              <footer className="mt-2">
                <strong className="text-2xl">{product.name}</strong>
                <span> {product.price}</span>
              </footer>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default PhotoGrid
