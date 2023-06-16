import "./Footer.css";
import FavoriteIcon from "@material-ui/icons/Favorite";

export default function Footer() {
  return (
    <footer>
      <p className="copyright">
        Made with <FavoriteIcon color={"secondary"} />
        <span role="img" aria-label="thinking"></span> by Rupali Doke..!
      </p>
    </footer>
  );
}
