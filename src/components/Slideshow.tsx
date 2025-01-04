import { useEffect, useState } from 'react';
import styles from './Slideshow.module.css';

const images = [
  '/images/port_1.jpg',
  '/images/port_2.jpg',
  '/images/port_3.jpg',
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className={styles.slideshow}>
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={index === currentIndex ? styles.active : ''}
        />
      ))}
    </div>
  );
};

export default Slideshow;
