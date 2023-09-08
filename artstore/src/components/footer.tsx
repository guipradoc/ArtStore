import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className=" bg-gray-50 mt-4 ">
      <div className=" py-2 container mx-auto text-xs text-center text-black">
        <p>
          © {new Date().getFullYear()} Grãos à Porta Cuiabá. All rights
          reserved. Created by{' '}
          <a href="mailto:emailgprado@gmail.com">Guilherme Prado</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
