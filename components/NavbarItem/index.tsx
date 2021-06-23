import Link from 'next/link'

interface ItemProps {
  text: string
  active: boolean
  url: string
}

export const NavbarItem = ({ text, active = false, url }: ItemProps) => (
  <li className={`px-6 py-6 ${active ? 'text-pink pink-shadow' : 'text-gray'}`}>
    <Link href={url}>
      <a>{text}</a>
    </Link>
  </li>
)