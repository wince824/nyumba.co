import '../app/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Slider from '../components/slider'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' 
config.autoAddCss = false;

function MyApp() {
  return (
    <div className="bg-gradient-to-r from-transparent to-slate-500 w-full min-h-screen mx-auto grid place-items-center">
      <Navbar />
      <Slider/>
      <Footer/>
    </div>
  );
}

export default MyApp;