import { useRouter } from 'next/router'

interface BannerProps {
  title: string
  text: string
  linkUrl: string
  imageUrl: string
  className?: string
}

export const Banner = ({ text, title, linkUrl, imageUrl, className = "" }: BannerProps) => {
  const router = useRouter();
  return (
    <div
      className={`p-5 flex rounded flex-wrap justify-center content-center w-full bg-gray bg-cover ${className}`}
      style={{ "background": `url(${imageUrl})`, "height": 180 }}
      onClick={() => router.push(linkUrl)}
    >
      <div className="text-white">
        <div className="text-2xl font-semibold"> {title} </div>
        <div> {text} </div>
      </div>
    </div>
  )
}