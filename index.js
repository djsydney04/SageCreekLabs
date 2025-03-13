import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SAGE CREEK LABS</title>
      </Head>

      <div className={styles.header}>
        <img src="/images/logo.svg" alt="SCL" className={styles.logo} />
        <h1>SAGE CREEK LABS</h1>
      </div>

      <hr />

      <p>
        We build companies from the ground up—identifying opportunities, validating ideas, and turning them into market-leading businesses. Instead of investing in outside founders, we take a hands-on approach, moving fast and executing with precision.
      </p>

      <hr />

      <h2>FOCUS</h2>
      <ul>
        <li>* Crypto - building the future of finance</li>
        <li>* Social - rethinking how people connect</li>
        <li>* Automation - using AI to make work more efficient</li>
      </ul>

      <hr />

      <h2>MANAGEMENT</h2>
      <table>
        <tr>
          <td>Dylan Mitic</td>
          <td>Managing Partner</td>
        </tr>
        <tr>
          <td>Benoit Boudreau</td>
          <td>Managing Partner</td>
        </tr>
      </table>

      <hr />

      <h2>PORTFOLIO COMPANIES</h2>
      <p>WIP</p>

      <hr />

      <div className={styles.footer}>
        <p>© 2024 Sage Creek Labs</p>
        <p>Contact: <a href="mailto:contact@sagecreeklabs.com">contact@sagecreeklabs.com</a></p>
      </div>
    </div>
  );
}