import React from 'react';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      {/* Welcome Section */}
      <div className={styles.welcome}>
        <h1>Welcome to Mzilikazi/Barbourfields Church of the Nazarene</h1>
        <p>
          We are delighted to welcome you to the online home of the Mzilikazi/Barbourfields Church of the Nazarene. 
          At the heart of our digital doorstep, you will discover a community dedicated to one common purpose: making 
          Christlike Disciples in the nations. Our journey is one of faith, fellowship, and transformation. As we navigate 
          the path of discipleship, we find joy in the pursuit of Christlikeness and the deepening of our faith. Whether 
          you are a longstanding member of our Nazarene family or a newcomer seeking spiritual guidance, you are a treasured 
          part of our story. Here, you will find resources, from our quarterly newsletter a warm invitation to join our 
          local congregations.
        </p>
      </div>

      <div className={styles.imageContainer}>
        {/* Sunday Services Section */}
        <div className={styles.services}>
          <h2>Sunday Services</h2>
          <p>Join us every Sunday from 09:00 AM to 12:30 PM for worship.</p>
          <p>Join our youth services every Saturday from 14:00 PM to 16:00 PM.</p>
          <p>Join our women services every Thursday from 14:00 PM to 16:00 PM.</p>
          <p className={styles.additionalInfo}>You find more information on the links above</p>
        </div>

        <div className={styles.centerImageContainer}>
          <img
            src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/IMG-20240830-WA0029.jpg?raw=true"
            alt="Service 1"
            className={`${styles.serviceImage} ${styles.vibration}`}
          />
          <p className={styles.msipha}>Mr. & Mrs. Msipha</p>
        </div>

        <img
          src="https://github.com/Monwabisindlovu/portfolio-landing_page/blob/main/images/505632-free-download-holy-bible-wallpaper-1920x1080.jpg?raw=true"
          alt="Holy Bible"
          className={`${styles.sideImage} ${styles.vibration}`}
        />
      </div>
      {/* Footer Section */}
      <footer className={styles.footer}>
        <p>© 2024 Mzilikazi/Barbourfields Church of the Nazarene. Designed by Your Monwabisindlovu/Mdue.</p>
      </footer>
    </div>
  );
}

export default Home;
