import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "../Introduction/EpisodesIntroduction.module.scss";

const SkeletonEpisode = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={`${styles.wrapper} container`}>
        <span className={styles.icon}>
          <Skeleton circle={true} height={72} width={72} />
        </span>

        <div className={styles.title}>
          <h1>
            <Skeleton width={265} height={35} />
          </h1>
          <Skeleton circle width={56} height={56} />
        </div>

        <div className={styles.infos}>
          <div className={styles.airDate}>
            <Skeleton
              circle={true}
              height={32}
              width={32}
              style={{ marginRight: "8px" }}
            />
            <p>
              <Skeleton width={100} />
            </p>
          </div>

          <div className={styles.episode}>
            <Skeleton
              circle={true}
              height={32}
              width={32}
              style={{ marginRight: "8px" }}
            />
            <p>
              <Skeleton width={100} />
            </p>
          </div>
        </div>

        <div className={styles.statistic}>
          <Skeleton
            circle={true}
            height={32}
            width={32}
            style={{ marginRight: "8px" }}
          />
          <p>
            <Skeleton width={300} />
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonEpisode;
