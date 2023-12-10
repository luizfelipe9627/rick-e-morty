import Head from "../Helper/Head";
import styles from "./NotFoundOverview.module.scss";
import NotFoundImg from "../../assets/img/NotFoundImg.png";
import { Link } from "react-router-dom";

const NotFoundOverview = () => {
  return (
    <>
      <Head
        title="Erro 404"
        description="Página não encontrada do site Rick and Morty."
      />

      <section className={`${styles.notFoundOverview} container`}>
        <div className={styles.content}>
          <h1>404</h1>
          <h2>Página não encontrada</h2>
          <p>
            Ops! Parece que você entrou em uma dimensão desconhecida. A página
            que você está procurando não existe ou foi removida por alguma
            trapalhada interdimensional de Rick e Morty.
          </p>

          <Link to="/" className={styles.button}>
            Voltar ao Início
          </Link>
        </div>

        <img src={NotFoundImg} alt="Rick e Morty saindo de um portal" />
      </section>
    </>
  );
};

export default NotFoundOverview;
