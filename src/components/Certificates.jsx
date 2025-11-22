import React from 'react'
import CertificateItem from '../elements/CertificateItem'
import { CertificatesList } from '../utils/Skills'

const Certificates = () => {
  return (
    <div className='grid grid-cols-1 p-4 md:p-0 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full'>
      {CertificatesList.map((item) => 
        <CertificateItem certificate={item}/>
      )}
    </div>
  )
}

export default Certificates