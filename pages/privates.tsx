import type { NextPage } from "next";
import { Page } from "../src/page/Page";
import styles from "../styles/Privates.module.css";

const Privates: NextPage = () => {
  return (
    <Page>
      <div className={styles.container}>
        <p>
          All the yogis at the studio are available for private lessons{" "}
          <strong>exclusively</strong> through the studio.
        </p>
        <p>
          While each individual teacher and client is a little bit different,
          pricing is typically in the following range:
        </p>
        <ul>
          <li>
            Consultations are <strong>free</strong>
          </li>
          <li>
            30 minute session: <strong>$100-150</strong>
          </li>
          <li>
            1 hour session: <strong>$180-270</strong>
          </li>
          <li>
            1.5 hour session: <strong>$300-420</strong>
          </li>
        </ul>
        <p>
          Contact us at{" "}
          <a href="mailto:e@sk.io" target="_blank" rel="noreferrer">
            e@sk.io
          </a>{" "}
          for more information.
        </p>
      </div>
    </Page>
  );
};

export default Privates;
