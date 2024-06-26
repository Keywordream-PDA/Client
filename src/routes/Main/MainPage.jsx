import * as React from "react";
import HotTopic from "./HotTopic";
import styles from "./MainPage.module.css";
import PopularStock from "./PopularStock";
import TopKeyword from "./TopKeyword";
export default function MainPage() {
  return (
    <div className={styles.layout}>
      <div className={styles.hotTopic}>
        
        <HotTopic />
      </div>
      <TopKeyword />
      <PopularStock />
    </div>
  );
}
