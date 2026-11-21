interface TitleTypographyProps{
    title:string;
    className?:string;
}
const TitleTypography:React.FC<TitleTypographyProps> = ({title,className}) => {
  return (
     <div className={`m-2 flex items-center  gap-2 ${className}`} >
         <div className="h-8 w-1 rounded-full bg-[#D5A72A]" />
      <p className="text-2xl font-bold">{title}</p>
      </div>
  )
}

export default TitleTypography
