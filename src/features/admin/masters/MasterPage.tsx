import TitleTypography from "@/features/components/TitleTypography"
import MasterCard from "./components/MasterCard"
import { masterList } from "./constants"

const MasterPage = () => {
  return (
    <div className="px-3 py-4">
     <TitleTypography
     title="Masters"
     className="mb-4"
     />
       

      <div className="grid grid-cols-3 gap-2">
          {masterList.map((item)=>(
        <MasterCard
        key={item.key}
        label={item.label}
        icon={item.icon}
        count={item.count}
        route={item.route}
        />
      ))}
      </div>
     
    </div>
  )
}

export default MasterPage
