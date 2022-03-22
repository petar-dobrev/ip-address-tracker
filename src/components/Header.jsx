import Search from "./Search";

function Header({title}) {
  return (
    <div className="header">
        <h1 className="header-title">{title}</h1>
        <Search />
    </div>
  )
}

export default Header