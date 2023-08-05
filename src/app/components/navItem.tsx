type NavItemProps={
  href:string
   isActive:boolean,
  children:React.ReactNode
}
export default function NavItem({ href, isActive, children }:NavItemProps) {
  return (
    <li>
      <a
        href={href}
        className={`${isActive ? 'bg-red-00 text-white mx-2.5' : 'bg-slate-50 mx-2.5'}`}
      >
        {children}
      </a>
    </li>
  )
}