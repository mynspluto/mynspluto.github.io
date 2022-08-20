import type { NextComponentType  } from 'next'

const Menu: NextComponentType  = (title: string, child) => {
  
  return (
    <div>
      {title}
      
    </div>
  )
}

export default Menu
