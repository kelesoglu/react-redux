import './App.css';
import Counter from "./components/Counter"
import IncreaseCounter from "./components/IncreaseCounter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"

function App() {
  return (
    <div>
      <Counter />
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
    </div>
  );
}

export default App;


/**
 * Redux Nedir? 
 * Açık kaynak kodlu bir state management(durumu yönetimi) kütüphanesidir. Genel olarak state'i merkezileştirip uygulamanın karmaşıklığını 
 * azaltarak daha yönetilebilir yapmaya çalışır. 
 * Redux' ta temel kavramlar :
 * Action: Bir javascript objesidir, Store'da hangi state'in değişeceği bilgisini(type) ve state verisini taşır(payload). Operasyonların
 * yazıldığı kısımdır.
 * 
 * 
*/