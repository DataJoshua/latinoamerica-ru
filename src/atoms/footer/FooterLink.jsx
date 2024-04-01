import { Link } from "react-router-dom";

const FooterLink = ({ url, label }) => {
  return (
    <li>
      <Link to={url} className="hover:underline me-4 md:me-6">{label}</Link>
    </li>
  )
}

export default FooterLink;
