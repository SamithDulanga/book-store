
import './App.css'
import {Navbar} from "./Navbar/Navbar.tsx";
import {TopContent} from "./TopContent/TopContent.tsx";
import {BestBooks} from "./BestBooks/BestBooks.tsx";
import {Categories} from "./Categories/Categories.tsx";
import {Testimonial} from "./Testimonial/Testimonial.tsx";
import {Footer} from "./Footer/Footer.tsx";

function App() {

  return (
    <>
      <div>
          <Navbar/>
          <TopContent/>
          <BestBooks/>
          <Categories/>
          <Testimonial/>
          <Footer/>

      </div>

    </>
  )
}

export default App
