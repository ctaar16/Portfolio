import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(props) {
  return (
    <div className="Layout">
        <Header />
      <div className="layoutchildren">
      {props.children}
      </div>

      <Footer />
    </div>
  );
}
