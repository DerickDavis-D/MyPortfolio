import React from 'react'

export const ContactInfoCard = ({icon, text}) => {
  return (
    <div className=' flex items-center gap-5 bg-blue-50 rounded border border-blue-100 px-4 py-3 mb-5'>
        <div className='w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg'>
            {icon}
        </div>

        <p className='text-secondary text-xs md:text-sm'>
            {text}
        </p>

    </div>
  )
}

export default ContactInfoCard