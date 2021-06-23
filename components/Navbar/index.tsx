import Image from 'next/image'
import { NavbarItem } from '../NavbarItem'
import { BsList } from 'react-icons/bs'

export const Navbar = () => (
  <nav className="bg-primary fixed w-full z-10">
    <div className="flex px-12 m-0 flex-row justify-between items-center text-white text-sm">
      <div className="flex flex-row">
        <div className="mt-2 sm:mt-5 mx-5">
          <Image src="/logo.svg" alt="logo" width="30" height="30" />
        </div>
        <ul className="sm:flex flex-row hidden">
          <NavbarItem active={true} url="/" text="HOME" />
          <NavbarItem active={false} url="/" text="FAQ" />
          <NavbarItem active={false} url="/" text="NEWS" />
        </ul>
      </div>
      <ul className="sm:flex flex-row hidden">
        <NavbarItem active={false} url="/" text="SIGN UP" />
      </ul>
      <div className="my-auto py-5 block sm:hidden">
        <BsList size={30} />
      </div>
    </div>
    <div className="text-white px-12 hidden">
      <ul>
        <NavbarItem active={true} url="/" text="HOME" />
        <NavbarItem active={false} url="/" text="FAQ" />
        <NavbarItem active={false} url="/" text="NEWS" />
      </ul>
    </div>
  </nav>
)