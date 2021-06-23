import { PostIcon } from "../PostIcon";
import { DataView } from "../DataView";

interface PostParams {
  className?: String
}

export const Post = ({ className = "" }: PostParams) => (
  <div className={`w-full h-28 rounded-lg bg-black-gradient flex flex-wrap p-10 content-center flex-row justify-between items-center  ${className}`}>
    <div className="flex gap-x-4 items-center text-white font-sans">
      <PostIcon />
      <div className="block text-left">
        <div className="font-bold text-lg">
          Title
        </div>
        <div className="text-xs text-gray">
          Description incrivel
        </div>
      </div>
    </div>
    <div className="md:flex hidden gap-x-7">
      <DataView label="POSTS" value="1.7K" />
      <DataView label="LAST" value="13m" />
    </div>
  </div>
)