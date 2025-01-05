import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div id="about" className={styles['about-us']}>
      <img src="/images/company.jpg" alt="About Us" />
      <div className={styles.content}>
        <h2>About Us</h2>
        <p>
          Ningbo Yongxiang International Freight Forwarding Co., Ltd. was established on March 20, 2013, 
          with its headquarters located on Zhi Xing Road, Fuming Street, Yinzhou District, Ningbo, Zhejiang Province.
        </p>
        <p>
          Yongxiang Freight specializes in international freight forwarding, offering services in sea, air, 
          and land transportation. The company boasts a team of experienced professionals dedicated to providing 
          comprehensive logistics solutions to clients.
        </p>
        <p>
          Through meticulous service and efficient management, Yongxiang Freight ensures the safe and timely 
          delivery of goods while continually enhancing service quality to meet market demands.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
