import React from "react";
import images from "../assets";

import styles from "../styles/Global";

const FeatureCard = ({ iconUrl, IconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{IconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            ProNef has been develop using a cross-platform technology, React
            Native.
          </p>
        </div>
        <div className={styles.flexWrap}>
          <FeatureCard iconUrl={images.react} IconText="React Native" />
          <FeatureCard iconUrl={images.javascript} IconText="JavaScript" />
        </div>
      </div>
    </div>
  );
};

export default Features;
