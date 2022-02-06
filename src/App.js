
import './App.css';
import Prenavbar from './components/Prenavbar.js'
import Navbar from './components/Navbar.js'
import {  BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Slider from "./components/Slider.js"
import Offers from "./components/Offers.js"
import data from "./data/data.json"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessories from "./components/HotAccessories.js"
import Heading from "./components/Heading.js"
import Videos from "./components/Videos.js"
import Banner from "./components/Banner.js"
import Fotter from "./components/Fotter.js"
import ProductReviews from "./components/ProductReviews.js"
import Navopctions from "./components/Navopctions.js" 
const appbanner=require('./data/data.json').banner

function App() {
  return (  
   
    <Router> 
    <Prenavbar/>
    <Navbar/>
    <Navopctions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories}> 

    </Navopctions>
    <Slider start={appbanner.start}/>
    <Offers  offer={data.offer}/>

    <Heading text=" STAR PRODUCT"/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading text=" HOT ACCESSORIES"/>
    <HotAccessoriesMenu/>
   
<Routes>
    <Route exact path="/music" element={ <HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}  />}>
      
       </Route>

       <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}  />}>
       
       </Route>

       <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}  />}>
       
       </Route>

       <Route exact path="/lifestyle" element={     <HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle}  />}>
  
       </Route>


       <Route exact path="/mobileAccessories" element={  <HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}  />}>
     
       </Route>
       </Routes>

       <Heading text="PRODUCT REVIEWS"/>
       <ProductReviews productReviews={data.productReviews}> 

       </ProductReviews>
       <Heading text="VIDEOS"/>
   
       <Videos videos={data.videos} />

    
       <Heading text="IN THE PRESS"/>
       <Banner banner={data.banner}> </Banner>
  <Fotter footer={data.footer}> </Fotter>
       </Router>
  
     

  );
}

export default App;
