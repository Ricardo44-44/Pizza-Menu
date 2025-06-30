import { Link } from "react-router-dom";
import styles from "./styles/navbar-style.module.css"

export default function Navbar () {
  return (
    <nav>
      <ul>
          <li>
            <Link className={styles ["link-styles"]} to ="/">HOME</Link>
          </li>
          <li>
            <Link className={styles ["link-styles"]} to="/Owner"> Owner</Link>
          </li>
      </ul>
    </nav>
  )
}


