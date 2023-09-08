import { stripe } from '@/lib/stripe'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Stripe from 'stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  // const router = useRouter() // if we need to redirect to another page from our own website (pages)
  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId,
      })

      const { checkoutUrl } = response.data

      // router.push('/checkout') // if we need to redirect to another page from our own website (pages)

      window.location.href = checkoutUrl
    } catch (error) {
      // Connectar com uma ferramenta de observabilidade (datadog/sentry)
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout')
    }
  }

  // recomendado
  // const { isFallback } = useRouter()
  // if (isFallback) {
  //     return <p>Loading...</p>
  // }

  return (
    <>
      <Head>
        <title>{product.name} | Daisy Store</title>
      </Head>

      <div>
        <div>
          <Image
            src={product.imageUrl}
            width={520}
            height={620}
            alt=""
            priority={true}
          />
        </div>

        <div>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleBuyProduct}
          >
            Buy
          </button>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_Oash7wCXBq0IaY' } }],
    fallback: 'blocking',
  }
}

// replace code below with this to clear error
// export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
//     if (!params || !params.id) {
//       return {
//         notFound: true,
//       }
//     }

//     const productId = params.id;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params || !params.id) {
    return {
      notFound: true,
    }
  }

  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price
  const formattedPrice = price?.unit_amount
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD',
      }).format(price.unit_amount / 100)
    : ''

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formattedPrice,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
