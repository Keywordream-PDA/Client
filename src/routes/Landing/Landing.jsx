import React from "react";
import RunningBear from "../../assets/image/RunningBear.gif";
import Logo from "../../assets/image/logo.png";
import styles from "./Landing.module.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  const handleStartClick = () => {
    const nickName = localStorage.getItem("nickName");
    if (!nickName) {
      navigate("/login");
    } else {
      navigate("/main");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="" className={styles.logo} />
      </div>
      <div className={styles.bearContainer}>
        <img src={RunningBear} alt="" className={styles.bear} />
      </div>
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          onClick={handleStartClick}
          className={styles.button}
          sx={{ bgcolor: "#1D5AFF" }}
        >
          시작하기
        </Button>
      </div>
    </div>
  );
}
