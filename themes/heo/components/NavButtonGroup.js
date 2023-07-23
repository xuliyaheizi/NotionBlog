
import React from 'react'

/**
 * 首页导航大按钮组件
 * @param {*} props
 * @returns
 */
const NavButtonGroup = (props) => {
  const { categoryOptions } = props
  if (!categoryOptions || categoryOptions.length === 0) {
    return <></>
  }

  return (
    <nav id='home-nav-button' className={'w-full z-10 md:h-72 md:mt-6 xl:mt-32 px-5 py-2 mt-8 flex flex-wrap md:max-w-5xl space-y-2 md:space-y-1 md:flex justify-center max-h-80 overflow-auto'}>
      {}
    </nav>
  )
}
export default NavButtonGroup
