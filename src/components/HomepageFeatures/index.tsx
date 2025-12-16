import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const Integrantes = [
  {
    title: "Diogo Oliveira Ferreira",
    imageUrl: "https://github.com/SDC-Diih.png",
  },
  {
    title: "Alexandre Machado Rosa Filho",
    imageUrl: "https://github.com/alxmrf.png",
  },
  {
    title: "Jonatas",
    imageUrl: "https://github.com/SDC-Diih.png",
  },
];

function IntegrantesLayout({ imageUrl, title }) {
  return (
    <div className={clsx("col col--4", styles.integranteItem)}>
      <div className="text--center">
        <img
          className={styles.integrantesImg}
          src={useBaseUrl(imageUrl)}
          alt={title}
        />

        <div className="text--center padding-horiz--md">
          <Heading as="h2">{title}</Heading>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section
      className={styles.features}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div style={{ marginBottom: "70px", marginTop: "30px" }}>
        <h1 style={{ fontSize: "40px" }}>INTEGRANTES</h1>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-center">
          {Integrantes.map((props, idx) => (
            <IntegrantesLayout key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
