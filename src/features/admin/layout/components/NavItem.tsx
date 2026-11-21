import type { NavItemProps } from "../types"

const NavItem: React.FC<NavItemProps> = ({label,icon,active}) => {
  const IconComponent = icon;
  return (
    <div className={ `cursor-pointer rounded-lg px-3.5 py-2.5 flex gap-3 ${active ? 'bg-gray-700': '' }   `}>
        <div className={active? 'text-sidebar-primary' : ''}>
        {active && 
           <span className="absolute left-0  h-5 w-0.5  rounded-full bg-[#D5A72A]" />
        } <IconComponent size={17}/>
        </div>
      <p className={`text-[14px]  tracking-tight  font-bold ${active ? "text-sidebar-primary " : "text-gray-400"} `}>{label}</p>
    </div>
  )
}

export default NavItem
