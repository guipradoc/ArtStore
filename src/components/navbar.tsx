import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import logo from '../../public/logo.png'

export default function NavBar() {
  const [showProjects, setShowProjects] = useState(false)
  const timeoutRef = useRef<null | number>(null)
  const [isSmallerScreen, setIsSmallerScreen] = useState(false) // Define isSmallerScreen state

  const handleProjectsHover = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowProjects(true)
  }

  const handleToggleMenu = () => {
    const navbar = document.getElementById('navbar-default')
    if (navbar) {
      navbar.classList.toggle('hidden')
    }
  }

  const handleProjectsLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setShowProjects(false)
    }, 500)
  }

  useEffect(() => {
    const toggleMenu = () => {
      const navbar = document.getElementById('navbar-default')
      if (navbar) {
        navbar.classList.toggle('hidden')
      }
    }

    const collapseButton = document.getElementById('collapseButton')
    collapseButton?.addEventListener('click', toggleMenu)

    return () => {
      collapseButton?.removeEventListener('click', toggleMenu)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerScreen(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className="top-0 z-50 font-baloo  bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image alt="logo" src={logo} className="mb-6" />
          {/* <h1 className="self-center text-md md:text-2xl lg:text-4xl xl:text-5xl font-semibold whitespace-nowrap dark:text-white">
            Grãos à Porta Cuiabá
          </h1> */}
        </Link>
        <button
          id="collapseButton"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-brown-lights focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {!isSmallerScreen ? null : (
          <div
            className=" hidden w-full md:block md:w-auto z-20 h-screen max-w-screen-xl flex-wrap items-center justify-between mx-auto  "
            id="navbar-default"
          >
            <ul
              className="h-full w-screen pt-4 px-4  bg-gray-50   z-50"
              style={{ position: 'fixed', bottom: '0', left: '0' }}
            >
              <Link onClick={handleToggleMenu} href={'/'}>
                <h1 className=" self-center whitespace-nowrap dark:text-white text-md my-2 font-semibold z-50">
                  Grãos à Porta Cuiabá
                </h1>
              </Link>
              <button
                data-modal-target="top-left-modal"
                data-modal-toggle="top-left-modal"
                className="absolute top-3 right-1 text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center border-gray-100 bg-gray-50 "
                type="button"
                onClick={handleToggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
                </svg>
              </button>
              <div className="h-full flex z-50   ">
                <div className=" align-middle flex-wrap ">
                  <li>
                    <Link
                      onClick={handleToggleMenu}
                      href="/shop"
                      className="block py-2 pl-3 text-8xl pr-4 text-gray-900 rounded hover:bg-brown-light md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent cursor-pointer  "
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sobre"
                      className="block py-2 pl-3 text-8xl pr-4 text-gray-900 rounded hover:bg-brown-light md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent cursor-pointer  "
                    >
                      Sobre
                    </Link>
                  </li>
                  <li
                    className={`relative group ${
                      showProjects ? 'md:hover:bg-transparent' : ''
                    }`}
                    onMouseEnter={handleProjectsHover}
                    onMouseLeave={handleProjectsLeave}
                    onClick={handleToggleMenu}
                  >
                    <Link
                      href="/types"
                      className="block py-2 pl-3 text-8xl pr-4 text-gray-900 rounded hover:bg-brown-light md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent cursor-pointer"
                    >
                      Tipos de Café
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="block py-2 pl-3 text-8xl pr-4 text-gray-900 rounded hover:bg-brown-light md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent cursor-pointer"
                    >
                      Contact
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        )}

        <div
          className="hidden w-full md:block md:w-auto z-10"
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            <li>
              <Link
                href="/shop"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-brown-light md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent cursor-pointer"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/sobre"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-brown-light md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent cursor-pointer"
              >
                Sobre
              </Link>
            </li>
            <li
              className={`relative group ${
                showProjects ? 'md:hover:bg-transparent' : ''
              }`}
              onMouseEnter={handleProjectsHover}
              onMouseLeave={handleProjectsLeave}
            >
              <Link
                href="/#marx"
                className="block py-2 pl-3 pr-4 hover:text-rustic-brown  rounded md:border-0 md:p-0 dark:text-white  cursor-pointer"
              >
                Tipos de Café
              </Link>
              {/* {showProjects && (
                <ul className="absolute">
                  <li>
                    <Link href="/projects/marx12">
                      <div className="block py-2 pl-3 pr-4 hover:text-rustic-brown  hover:tracking-normal rounded md:border-0 md:p-0 dark:text-white  cursor-pointer">
                        Arabica
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/mane">
                      <div className="block py-2 pl-3 pr-4 hover:text-rustic-brown  hover:tracking-normal rounded md:border-0 md:p-0 dark:text-white  cursor-pointer">
                        Robusta
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/marx15">
                      <div className="block py-2 pl-3 pr-4 hover:text-rustic-brown  hover:tracking-normal rounded md:border-0 md:p-0 dark:text-white  cursor-pointer">
                        Liberica
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects/post">
                      <div className="block py-2 pl-3 pr-4 hover:text-rustic-brown  hover:tracking-normal rounded md:border-0 md:p-0 dark:text-white  cursor-pointer">
                        Excelsa
                      </div>
                    </Link>
                  </li>
                </ul>
              )} */}
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-brown-light md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
