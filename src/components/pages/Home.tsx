import Footer from "../Footer";
import NavBar from "../Navbar";

function Home() {
  return (
    <>
      <NavBar />

      <h1>A configurar o Webpack + Typescript + Babel </h1>
      <h3>
        App desenvolvido por:
        <a
          href="https://www.linkedin.com/in/jessicaaquiles/"
          target="_blank"
          rel="noreferrer"
        >
          Jéssica Aquiles
        </a>
      </h3>

      <Footer />
    </>
  );
}

export default Home;
