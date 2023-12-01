import styles from "../Cards/CardCharacter.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCardCharacter = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={styles.cardCharacter}>
        <div className={styles.photo}>
          <Skeleton height="226px" width="100%" />
        </div>

        <div className={styles.infos}>
          <div className={styles.wrapper}>
            <h1 className={styles.name}>
              <Skeleton height={20} width={150} />
            </h1>

            <span className={styles.favorite}>
              <Skeleton circle={true} height={40} width={40} />
            </span>
          </div>

          <div className={styles.identity}>
            <p className={styles.alive}>
              <Skeleton circle={true} height={20} width={20} />
              <Skeleton height={20} width={130} />
            </p>

            <p className={styles.species}>
              <Skeleton circle={true} height={20} width={20} />
              <Skeleton height={20} width={130} />
            </p>

            <p className={styles.planet}>
              <Skeleton circle={true} height={20} width={20} />
              <Skeleton height={20} width={130} />
            </p>
          </div>

          <span className={styles.saibaMais}>
            <Skeleton circle={true} height={20} width={20} />
            <Skeleton height={20} width={80} style={{ marginLeft: "4px" }} />
          </span>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCardCharacter;
