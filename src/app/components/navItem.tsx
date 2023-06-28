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
          className={`block px-3 py-2 border-solid border-2 rounded-xl border-red-600  rounded-md ${isActive ? 'bg-red-00 text-white' : 'bg-slate-50'}`}
        >
          {children}
        </a>
      </li>
    )
  }