import Head from 'next/head'
import Image from 'next/image'
import photo1 from '../../public/1.jpg'
import photo2 from '../../public/2.jpg'
import photo3 from '../../public/3.jpg'
import photo4 from '../../public/4.jpg'
import photo5 from '../../public/5.jpg'

export default function About() {
  return (
    <div>
      <Head>
        <title> Sobre | Grãos à Porta Cuiabá</title>
        <meta name="description" content="Sobre a nossa empresa de café." />
      </Head>

      <div className=" p-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-baloo  font-bold mb-4">Sobre Nós</h1>
          <p className=" text-gray-600 ">
            Nossa história começou em 2017 com um compromisso inabalável em
            encontrar e selecionar os melhores cafés dos Estados Unidos. Desde
            então, nossas parcerias com cafeterias, produtores, baristas,
            empresas e clientes nos ajudaram a crescer e aperfeiçoar uma cultura
            e experiência compartilhada em torno do café.
          </p>
          <p className="text-gray-600 ">
            Estamos tão grandiosos quanto a soma de nossos parceiros. Como
            entusiastas do café e apreciadores dos melhores sabores, agradecemos
            a você por fazer parte desta jornada e nos ajudar a nos tornarmos o
            que somos hoje.
          </p>
          <p className="text-gray-600">
            Nossa equipe está localizada em Nova York, e é a partir do nosso
            armazém aqui que selecionamos cuidadosamente os melhores cafés das
            cafeterias dos Estados Unidos para enviar a você. Apreciamos sua
            confiança em nosso processo de seleção e esperamos que cada xícara
            de café que você desfruta seja uma experiência extraordinária.
            Obrigado por escolher os melhores cafés dos EUA e por se juntar a
            nós nesta emocionante jornada do café!
          </p>

          {/* Flex container for side-by-side images */}
        </div>
      </div>
      <div className="flex">
        <div>
          {/* First Image */}
          <Image
            src={photo1}
            alt="Image 1"
            width={500}
            height={500}
            className="max-w-md mx-auto "
            layout="responsive" // Set both images to responsive layout
          />
        </div>
        <div>
          {/* Second Image */}
          <Image
            src={photo2}
            alt="Image 2"
            width={500}
            height={500}
            className="max-w-md mx-auto "
            layout="responsive" // Set both images to responsive layout
          />
        </div>
        <div>
          {/* Second Image */}
          <Image
            src={photo3}
            alt="Image 2"
            width={500}
            height={500}
            className="max-w-md mx-auto "
            layout="responsive" // Set both images to responsive layout
          />
        </div>
        <div>
          {/* Second Image */}
          <Image
            src={photo4}
            alt="Image 2"
            width={500}
            height={500}
            className="max-w-md mx-auto "
            layout="responsive" // Set both images to responsive layout
          />
        </div>
        <div>
          {/* Second Image */}
          <Image
            src={photo5}
            alt="Image 2"
            width={500}
            height={500}
            className="max-w-md mx-auto "
            layout="responsive" // Set both images to responsive layout
          />
        </div>
      </div>
    </div>
  )
}
