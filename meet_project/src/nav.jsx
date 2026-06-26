import'./slty_nav.css'
import img from'./assets/img/Suer-re.png'
const Nav = () => {
  return (
    <nav>
      <ul>
      <li className="logo">
        <img src={img} alt="Logo" />
      </li>
        <li className='logo'><h1 href="">Top adge</h1></li>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}               
export default Nav