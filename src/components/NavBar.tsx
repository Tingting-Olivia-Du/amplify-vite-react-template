import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Yxboxx International limited</div>
      <div className={styles.buttonContainer}>
        <a href="#about" className={styles.navButton}>About Us</a>
        <a href="#products" className={styles.navButton}>Products</a>
        <a href="#contact" className={styles.navButton}>Contact</a>
        <a href="tel:+1234567890" className={styles.navButton}>Call: +1 (234) 567-890</a>
      </div>
    </nav>
  );
};

export default NavBar;
