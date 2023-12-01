import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "../Cards/CardEpisode.module.scss";

const SkeletonCardEpisode = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={styles.cardEpisode}>
        <div className={styles.name} style={{ marginBottom: "28px" }}>
          <Skeleton circle={true} height={20} width={20} />
          <Skeleton height={20} width={170} style={{ marginLeft: "8px" }} />
        </div>

        <span className={styles.saibaMais}>
          <a style={{ display: "flex" }}>
            <Skeleton circle={true} height={20} width={20} />
            <Skeleton height={20} width={80} style={{ marginLeft: "8px" }} />
          </a>
          <Skeleton circle={true} height={20} width={20} />
        </span>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCardEpisode;
