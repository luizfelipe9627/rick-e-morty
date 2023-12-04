import React, { useState, useEffect } from "react";
import styles from "./usePagination.module.scss";
import ArrowX from "../components/Svg/ArrowX";

interface PaginationControls {
  page: number;
  active: number;
  handleActive: (pageNumber: number) => void;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  renderPageButtons: () => JSX.Element[];
  controls: JSX.Element;
}

const usePagination = (
  initialPage: number = 1,
  totalPages: number = 1,
): PaginationControls => {
  const [page, setPage] = useState<number>(initialPage);
  const [active, setActive] = useState<number>(initialPage);
  const [visibleButtons, setVisibleButtons] = useState(1);
  const maxVisibleButtons = 4;

  const nextButton = React.useRef<HTMLButtonElement>(null);
  const containerControls = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActive(page);
  }, [page]);

  const handleActive = (pageNumber: number): void => {
    setActive(pageNumber);
    setPage(pageNumber);

    setTimeout(() => {
      if (containerControls.current) {
        containerControls.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 500);
  };

  const handleNextPage = (): void => {
    if (visibleButtons + maxVisibleButtons <= totalPages) {
      setVisibleButtons(visibleButtons + maxVisibleButtons);
    }
  };

  const handlePreviousPage = (): void => {
    if (visibleButtons - maxVisibleButtons >= 1) {
      setVisibleButtons(visibleButtons - maxVisibleButtons);
    }
  };

  const renderPageButtons = () => {
    const buttons = [] as any;

    const renderButtons = () => {
      for (
        let i = visibleButtons;
        i < visibleButtons + maxVisibleButtons;
        i++
      ) {
        if (i <= totalPages) {
          buttons.push(
            <button
              onClick={() => handleActive(i)}
              key={i}
              className={active === i ? styles.active : ""}
            >
              {i}
            </button>,
          );
        }
      }
    };
    renderButtons();

    return buttons;
  };

  const controls = (
    <div className={styles.controls} ref={containerControls}>
      <button
        className={styles.previous}
        onClick={handlePreviousPage}
        disabled={visibleButtons <= 1}
      >
        <ArrowX size="medium" direction="left" />
      </button>

      <div className={styles.numbers}>{renderPageButtons()}</div>

      <button
        className={styles.next}
        onClick={handleNextPage}
        disabled={visibleButtons + maxVisibleButtons > totalPages}
        ref={nextButton}
      >
        <ArrowX size="medium" direction="right" />
      </button>
    </div>
  );

  return {
    page,
    active,
    handleActive,
    handleNextPage,
    handlePreviousPage,
    renderPageButtons,
    controls,
  };
};

export default usePagination;
