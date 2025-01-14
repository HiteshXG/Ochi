import React from 'react'

const Navbar = () => {
  return (
    <div className=' fixed z-[999] w-full px-20 py-8 font-["Neue_Montreal"] flex justify-between items-center'>
      <div className='logo'>
        Logo
      </div>
      <div className='links flex gap-10'>
        {["Services","Our Work", "About Us", "Insights", "Contact us"].map((item, index)=>(
          <a key={index} className={`text-lg  font-light ${index === 4 && "ml-32"}`}>{item}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar