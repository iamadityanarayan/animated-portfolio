import './app.scss';
import Navbar from './components/navbar/Navbar';
const App = () => {
  return (
    <main>
      <section id='Homepage'>
        <Navbar />
      </section>
      <section id='Service'>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section id='Portfolio'>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
    </main>
  );
};

export default App;
