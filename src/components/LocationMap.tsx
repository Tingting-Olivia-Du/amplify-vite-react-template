import styles from "./LocalMap.module.css";
import mapImage from "/src/assets/map.png"; // 确保图片路径正确

const LocalMap = () => {
  return (
    <section className={styles.mapSection}>
      <h2 className={styles.title}>Our Locations</h2>
      <p className={styles.subtitle}>Find us in the following cities:</p>
      <div className={styles.mapContainer}>
        <img src={mapImage} alt="Our Locations Map" className={styles.mapImage} />
      </div>
    </section>
  );
};

export default LocalMap;
