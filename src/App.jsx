import Btnchecked from './components/Btnchecked';
import Btnformulaire from './components/Btnformulaire';
import CacherVoiture from './components/CacherVoiture ';
import Checktable from './components/Checktable';
import Connexion from './components/Connexion';
import Formulaire from './components/Formulaire';
import ListeVoitures from './components/ListeVoitures';
import ProductCard from "./components/ProductCard"

function App() {
  const sampleProduct = {
    id: 1,
    name: "Smartphone XY",
    category: "Électronique",
    price: 599.99,
    description: "Un smartphone puissant avec appareil photo haute résolution"
  };
  return (
    <>
      <Formulaire />
      <Btnformulaire />
      <Btnchecked />
      <Checktable />
      <Connexion />
      <ListeVoitures />
      <br />
      <br />
      <br />
      <CacherVoiture/>
      <br />
      <ProductCard product={sampleProduct}/>

    </>
  );
}

export default App;
