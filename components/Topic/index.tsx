import { ComponentType } from 'react'

interface TopicProps {
  Icon: ComponentType
  text: string
}

export const Topic = ({ Icon, text }: TopicProps) => (
  <div className="flex gap-x-2 text-white flex-wrap ">
    <div className="text-4xl">
      <Icon />
    </div>
    <div className="text-xl f flex flex-wrap content-center "> {text} </div>
  </div>
)