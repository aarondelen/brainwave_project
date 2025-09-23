import brackets from "../assets/svg/Brackets";

const Tagline = ({className, children} : {className?: string; children?: React.ReactNode}) => {
  return (
    <div className={`tagline flex justify-center items-center text-center w-full ${className || ''}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  )
}

export default Tagline
