import React, { useState } from 'react'
import { db } from '../lib/firebaseConfig'

import { addDoc, collection } from 'firebase/firestore'
import Head from 'next/head'

const ContactUs: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      console.log('Submitting form...')

      const submissionDate = new Date().toISOString() // Get the current date and time in ISO format
      const docRef = await addDoc(collection(db, 'contacts'), {
        firstName,
        lastName,
        email,
        phone,
        message,
        submissionDate, // Add the submission date to the data object
      })

      console.log('Document written with ID:', docRef.id)

      // Show the confirmation message
      setShowConfirmation(true)

      // Reset the form fields
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setMessage('')
    } catch (error) {
      console.error('Error adding document:', error)
    }
  }

  return (
    <div>
      <Head>
        <title> Contato | Grãos à Porta Cuiabá</title>
        <meta name="description" content="Fale com nossa empresa empresa." />
      </Head>

      <div className=" justify-center ">
        <div className="flex flex-col align-middle items-center  justify-center">
          <div className="flex flex-col align-middle items-center  justify-center">
            {/* Left Side: Image */}
            <div className="align-middle justify-center items-center flex">
              <div className="relative">
                <div className=" inset-0 flex flex-col justify-center items-center ">
                  <h1 className="mt-8 md:text-8xl text-6xl text-center  font-robotoThin ">
                    Get in Touch
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="lg:mt-4  mt-2 flex flex-row font-robotoThin">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#A25829"
                  viewBox="0 0 256 256"
                >
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
                </svg>
                <p>
                  <a href="mailto:oi@graosaporta.com">
                    &nbsp;oi@graosaporta.com
                  </a>
                </p>
              </div>
              <div className=" flex flex-row ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#A25829"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                </svg>
                <p className="font-robotoThin">
                  <a
                    href="https://www.instagram.com/graosaporta/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;@graosaporta
                  </a>
                </p>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-8 align-middle justify-center items-center flex font-robotoThin">
              <form
                onSubmit={submitForm}
                className="align-middle justify-center items-center"
              >
                <div className="lg:mb-2 flex  flex-col md:flex-row md:space-x-4 ">
                  <div className="flex-1 lg:mb-2">
                    <label
                      htmlFor="first_name"
                      className=" lg:mb-2 text-base ml-2 font-robotoThin"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="lg:mb-2 border border-transparent bg-cotton-candy20 rounded-lg focus:ring-rustic-brown focus:border-rustic-brown  w-full p-1 text-black-75 font-quickSand text-base"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  {/* Last Name */}
                  <div className="flex-1 lg:mb-2">
                    <label
                      htmlFor="last_name"
                      className=" lg:mb-2 font-quickSand text-base ml-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      className="lg:mb-2 border border-transparent bg-cotton-candy20 rounded-lg focus:ring-rustic-brown focus:border-rustic-brown  w-full p-1 text-black-75 font-quickSand text-base"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="lg:mb-2 flex flex-col md:flex-row md:space-x-4">
                  {/* Email */}
                  <div className="flex-1 lg:mb-2">
                    <label
                      htmlFor="email"
                      className=" lg:mb-2 font-quickSand text-base ml-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="lg:mb-2 border border-transparent bg-cotton-candy20 rounded-lg focus:ring-rustic-brown focus:border-rustic-brown  w-full p-1 text-black-75 font-quickSand text-base"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* Phone Number */}
                  <div className="flex-1 lg:mb-2">
                    <label
                      htmlFor="phone"
                      className=" lg:mb-2 font-quickSand text-base ml-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="lg:mb-2 border border-transparent bg-cotton-candy20 rounded-lg focus:ring-rustic-brown focus:border-rustic-brown  w-full p-1 text-black-75 font-quickSand text-base"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {/* Message */}
                <label
                  htmlFor="message"
                  className=" lg:mb-2 font-quickSand text-base ml-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="mb-2 border border-transparent bg-cotton-candy20 rounded-lg focus:ring-rustic-brown focus:border-rustic-brown  w-full p-1 text-black-75 font-quickSand text-base"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <div className="flex  justify-center">
                  <button
                    type="submit"
                    className="btn bg-brown-dark my-4 btn-primary lg:my-8 bg-rustic-brown text-cotton-candy py-1 px-2 rounded-lg"
                  >
                    SUBMIT
                  </button>
                </div>
                {showConfirmation && (
                  <div className="alert alert-success mt-4 justify-center flex">
                    <p>Thank you for your message!</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
