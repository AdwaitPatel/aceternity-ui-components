import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import { NavbarDemo } from "./components/NavbarDemo";
import { StickyScrollRevealDemo } from "./components/StickyScrollRevealDemo";
import { ImagesSliderDemo } from "./components/ImagesSliderDemo";
import { DraggableCardDemo } from "./components/DraggableCardDemo";
import { InfiniteMovingCardsDemo } from "./components/InfiniteMovingCardsDemo";
import { SidebarDemo } from "./components/SidebarDemo";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <NavbarDemo
              HeroSection={BackgroundBeamsDemo}
              StickyScroll={StickyScrollRevealDemo}
              ImagesSlider={ImagesSliderDemo}
              DraggableCard={DraggableCardDemo}
              InfiniteMovingCards={InfiniteMovingCardsDemo}
            />
          }
        />
        <Route path="/dashboard" element={<SidebarDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
