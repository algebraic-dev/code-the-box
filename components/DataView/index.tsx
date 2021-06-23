interface DataProps {
  label: string,
  value: string
}

export const DataView = ({ label, value }: DataProps) => (
  <div className="text-white">
    <div className="font-bold text-xl"> {value} </div>
    <div className="font-thin"> {label} </div>
  </div>
)