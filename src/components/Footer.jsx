import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            Created by : {' '}
            
            Nivas {' '}
       
           {' '}
            <a href='https://www.linkedin.com/in/nivas-malligesan-419243292/' className="underline text-blue">
            Linked in
            </a>{' '}
            <a href='https://github.com/NivasMalligesan' className="ml-2 underline text-blue">
            GitHub
            </a>{' '}
            
          </p>
          <p className="font-semibold text-gray text-xs">
            Email : nivasmalligesan23@gmail.com
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer