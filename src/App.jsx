import "./App.css";
import Card from "./components/Card";
import image1 from "./assets/restaurants/commissary.jpg";
import image2 from "./assets/restaurants/reren_lamen_bar.jpg";
import image3 from "./assets/restaurants/MediumRareBethesdaOutdoor.jpg";
import image4 from "./assets/restaurants/pisso_y_nazca_1.jpg";
import image5 from "./assets/restaurants/The-Pembroke-Washington-DC-exterior.jpg";
import image6 from "./assets/restaurants/brookland's_finest.jpg";
import image7 from "./assets/restaurants/fiola_mare.jpg";
import image8 from "./assets/restaurants/toki_underground.jpg" ;
import image9 from "./assets/restaurants/we_the_pizza.jpg";
import image10 from "./assets/restaurants/rasika.jpg";
import image11 from "./assets/restaurants/tortino.jpg";
import image12 from "./assets/restaurants/the_point_DC_Night.jpg";


function App() {
  return (
    <div id="fullpage-div">
      <header>
        <h1>Edible D.C.</h1>
      </header>
      <main>
        <Card
          img={image1}
          title="Commissary"
          cuisine="American"
          cost="$$-$$$"
          link="https://www.tripadvisor.com/Restaurant_Review-g28970-d1179806-Reviews-Commissary-Washington_DC_District_of_Columbia.html"
        />
        <Card
          img={image2}
          title="Reren Lamen & Bar"
          cost="$$-$$$"
          cuisine="Chinese"
          link="https://www.tripadvisor.com/Restaurant_Review-g28970-d10371584-Reviews-Reren_Lamen_Bar-Washington_DC_District_of_Columbia.html"
        />
        <Card 
        img={image3}
        title="Medium Rare" 
        cuisine="American" 
        cost="$$-$$$"
        link="https://www.tripadvisor.com/Restaurant_Review-g28970-d2087856-Reviews-Medium_Rare-Washington_DC_District_of_Columbia.html" 
        />
        <Card 
        img={image4}
        title="Pisco y Nazca" 
        cuisine="Peruvian" 
        cost="$$-$$$"
        link="https://www.tripadvisor.com/Restaurant_Review-g28970-d15032097-Reviews-Pisco_y_Nazca-Washington_DC_District_of_Columbia.html" 
        />
        <Card 
        img={image5}
        title="The Pembroke" 
        cuisine="International" 
        cost="$$-$$$"
        link="https://www.tripadvisor.com/Restaurant_Review-g28970-d15838119-Reviews-The_Pembroke-Washington_DC_District_of_Columbia.html" />
        <Card 
        img={image6}
        title="Brookland's Finest Bar & Kitchen" 
        cuisine="American" 
        cost="$$-$$$" 
        link="https://www.tripadvisor.com/Restaurant_Review-g28970-d7259955-Reviews-Brookland_s_Finest_Bar_Kitchen-Washington_DC_District_of_Columbia.html" />
        <Card 
        img={image7}
        title="Fiola Mare DC" 
        cuisine="Italian" 
        cost="$$$$"
        link="https://www.tripadvisor.com/Restaurant_Review-g28970-d6370253-Reviews-Fiola_Mare_DC-Washington_DC_District_of_Columbia.html" />
        <Card 
        img={image8}
        title="Toki Underground DC" 
        cuisine="Japanese" 
        cost="$$-$$$" 
        link="https://www.tripadvisor.com/Restaurant_Review-g28970-d2249004-Reviews-Toki_Underground_DC-Washington_DC_District_of_Columbia.html" 
        />
        <Card
          img={image9}
          title="We the Pizza"
          cuisine="Italian"
          cost="$"
          link="https://www.tripadvisor.com/Restaurant_Review-g28970-d2192447-Reviews-We_the_Pizza-Washington_DC_District_of_Columbia.html"
        />
          <Card
            img={image10}
            title="Rasika"
            cuisine="Indian"
            cost="$$$$"
            link="https://www.tripadvisor.com/Restaurant_Review-g28970-d668468-Reviews-Rasika-Washington_DC_District_of_Columbia.html"
          />
        <Card
          img={image11}
          title="Tortino Restaurant"
          cuisine="Italian"
          cost="$$-$$$"
          link="https://www.tripadvisor.com/Restaurant_Review-g28970-d2714715-Reviews-Tortino_Restaurant-Washington_DC_District_of_Columbia.html"
        />
        <Card
          img={image12}
          title="The Point D.C."
          cuisine="American"
          cost="$$-$$$"
          link="https://www.tripadvisor.com/Restaurant_Review-g28970-d23178199-Reviews-The_Point_D_C-Washington_DC_District_of_Columbia.html"
        />
      </main>
    </div>
  );
}

export default App;
