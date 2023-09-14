import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import React, { useRef, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide] = React.useState(0)
  const [loaded] = useState(false)
  const instanceRef = useRef<HTMLDivElement | null>(null) // Declare instanceRef

  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 4000)
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on('dragStarted', clearNextTimeout)
        slider.on('animationEnded', nextTimeout)
        slider.on('updated', nextTimeout)
      },
    ],
  )

  return (
    <>
      <Head>
        <title>Home | Grãos à Porta Cuiabá</title>
      </Head>
      <div className="flex lg:flex-row flex-col lg:justify-around bg-white h-1/2  ">
        <div className="justify-center flex flex-col items-center m-4 lg:m-16 ">
          <h1 className="font-baloo  lg:text-5xl text-2xl text-center flex items-center justify-center h-1/2">
            Encontre o melhor café, <br />
            entregue na porta de sua casa!
          </h1>
          <h3 className="lg:text-xl text-lg text-center">
            Descubra uma seleção exclusiva de grãos de café gourmet <br />
            selecionados pelos melhores sommeliers no mundo.
          </h3>
        </div>
        <div className="w-full lg:w-1/4 font-baloo mx-auto justify-center">
          <div className="navigation-wrapper">
            <div
              ref={sliderRef}
              className="keen-slider"
              // style={{ margin: '0 auto', maxWidth: '100%' }}
            >
              {products.map((product) => {
                return (
                  <Link
                    href={`/product/${product.id}`}
                    key={product.id}
                    prefetch={false}
                  >
                    <div className="keen-slider__slide">
                      <Image
                        src={product.imageUrl}
                        width={400}
                        height={400}
                        alt="Cafes Graos a Porta"
                      />
                      {/* {loaded && instanceRef.current && (
                        <div className="dots">
                          {[
                            ...Array(
                              instanceRef.current.track.details.slides.length,
                            ).keys(),
                          ].map((idx) => {
                            return (
                              <button
                                key={idx}
                                onClick={() => {
                                  instanceRef.current?.moveToIdx(idx)
                                }}
                                className={
                                  'dot' +
                                  (currentSlide === idx ? ' active' : '')
                                }
                              ></button>
                            )
                          })}
                        </div>
                      )} */}
                      <footer className="flex justify-center bg-white mb-8">
                        <strong className="text-2xl">{product.name}</strong>
                        <span> {product.price}</span>
                      </footer>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:text-7xl text-4xl font-baloo text-center m-12 ">
          Inventário Atual
        </div>
        {/* adding the other images here below  */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
            {products.map((product) => {
              return (
                <Link
                  href={`/product/${product.id}`}
                  key={product.id}
                  prefetch={false}
                >
                  <div className="font-baloo  bg-white p-4 hover:border-2  border-green-dark rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                    <Image
                      src={product.imageUrl}
                      width={700}
                      height={700}
                      alt=""
                      className="justify-center"
                    />
                    <footer className="mt-2 justify-center">
                      <strong>{product.name}</strong>
                      <span> {product.price}</span>
                    </footer>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    // console.log(price.unit_amount)

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 12, // 12 hours
  }
}
