import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../Cards/CardLocation.module.scss";

const SkeletonCardLocation = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={styles.cardLocation}>
        <span className={styles.icon}>
          <Skeleton circle={true} height={50} width={50} />
        </span>

        <h1 className={styles.type} style={{ margin: "10px 0 5px 0" }}>
          <Skeleton width="100%" />
        </h1>
        <p className={styles.name}>
          <Skeleton width="50%" />
        </p>

        <div className={styles.wrapper}>
          <a style={{ display: "flex" }}>
            <Skeleton circle={true} height={20} width={20} />
            <Skeleton height={20} width={80} style={{ marginLeft: "8px" }} />
          </a>

          <Skeleton circle={true} height={30} width={30} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCardLocation;
