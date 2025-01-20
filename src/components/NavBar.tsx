import styles from "./NavBar.module.css";
import logo from "/src/assets/image.jpg"; // 确保你的 logo 图片路径正确

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        {/* 加入 logo 图片 */}
        <img src={logo} alt="Yxboxx Logo" className={styles.logoImage} />
        <span className={styles.logoText}>Yxboxx International Limited</span>
      </div>
      <div className={styles.buttonContainer}>
        <a href="#about" className={styles.navButton}>About Us</a>
        <a href="#products" className={styles.navButton}>Products</a>
        <a href="#contact" className={styles.navButton}>Contact</a>
        <a href="tel:+8613003728785" className={styles.navButton}>
          Call: +86 130 0372 8785
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
