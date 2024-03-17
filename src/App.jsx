import Banner from './components/banner/Banner';
import FooterAlvi from './components/footer/FooterAlvi';
import Navbar from './components/navbar/Navbar';
import RecipesMain from './components/recipes/RecipesMain';


export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <RecipesMain></RecipesMain>
      <FooterAlvi></FooterAlvi>
    </>
  )
}