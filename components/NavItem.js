'use client'


const NavItem = ( props) => {
  const { title, url, isSelected } = props
  return (
    <div>
       <li>
            <a className={`block px-3 text-white py-2  transition hover:text-teal-500 
              ${isSelected ? "text-black-500" : ""}`} href={url}>
              {title}
              </a>
          </li>
    </div>
  )
}

export default NavItem