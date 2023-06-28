export default function List({ children }:{children:React.ReactNode}) {
    return (
      <ul className="mt-4">
        {children}
      </ul>
    )
  }