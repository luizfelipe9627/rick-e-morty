import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "../../components/Introduction/CharactersIntroduction.module.scss";
import SkeletonCardLocation from "./SkeletonCardLocation";

const SkeletonCharacter = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <div className={styles.infos}>
        <div className={styles.img}>
          <Skeleton height="100%" width="100%" />
        </div>

        <div className={styles.content}>
          <div className={styles.name}>
            <h1>
              <Skeleton width={265} />
            </h1>
            <Skeleton circle width={56} height={56} />
          </div>

          <div className={styles.episode}>
            <Skeleton circle={true} height={32} width={32} />
            <Skeleton width={250} />
          </div>

          <div className={styles.statistics}>
            <p>
              <Skeleton
                circle={true}
                height={32}
                width={32}
                style={{ marginRight: "8px" }}
              />
              <Skeleton width={90} />
            </p>

            <p>
              <Skeleton
                circle={true}
                height={32}
                width={32}
                style={{ marginRight: "8px" }}
              />
              <Skeleton width={90} />
            </p>

            <p className={styles.gender}>
              <Skeleton
                circle={true}
                height={32}
                width={32}
                style={{ marginRight: "8px" }}
              />
              <Skeleton width={90} />
            </p>
          </div>

          <div className={styles.location}>
            <SkeletonCardLocation />
            <SkeletonCardLocation />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default SkeletonCharacter;
