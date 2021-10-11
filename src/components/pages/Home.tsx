import Footer from "../Footer";
import NavBar from "../Navbar";
// @ts-ignore
import logo from "../../assets/img/me.gif";

function Home() {
  return (
    <>
      <NavBar />

      <h1>A configurar o Webpack + Typescript + Babel </h1>
      <h2>App desenvolvido por:Jéssica Aquiles</h2>
        <a href="https://www.linkedin.com/in/jessicaaquiles/" target="_blank"  rel="noreferrer">  
          <img  alt="logo" style={{ width: 400 }} src={logo}  /> 
      <Footer />
    </>
  );
}

export default Home;
