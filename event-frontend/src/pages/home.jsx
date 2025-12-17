
import { useRef } from "react";
import EventScrollCard from '../components/Cards'
import Footer from "../components/Footer";
const CARD_WIDTH = 360;
const GAP = 24;
const Home = () => {
const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -(CARD_WIDTH * 3 + GAP * 3),
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: CARD_WIDTH * 3 + GAP * 3,
      behavior: "smooth",
    });
  };

  return (
    <div>
    <div
      className="relative w-full h-screen bg-cover bg-center rounded-3xl overflow-hidden"
      style={{ backgroundImage: "url('pic1.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h7 className="text-3xl font-semibold mb-4">
           Where Every Moment Becomes a Masterpiece
        </h7>

        <p className="text-lg max-w-xl mb-6">
          Venora curates premium events with creativity, elegance, and
          unforgettable experiences.
        </p>

        <button className="bg-white text-black px-8 py-3 rounded">
          Explore Packages
        </button>
      </div>
    </div>  
  {/* EVENT SECTION */}
      <section className="px-16 py-20 bg-white relative">

        <h2 className="text-4xl mb-10 font-semibold">
          Our Event Services
        </h2>

        {/* Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg w-12 h-12 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={scrollRight}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg w-12 h-12 rounded-full"
        >
          ❯
        </button>

        {/* VIEWPORT */}
        <div className="overflow-hidden">

          {/* SCROLL ROW */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth  no-scrollbar rounded-md  "
          >
            <EventScrollCard
              title="Wedding"
              content="Elegant weddings with timeless designs"
              explore= {<>{"Explore Now "}<i class="fa-solid fa-angle-right"></i></>}
              image="https://media.istockphoto.com/id/1186214696/photo/hindu-wedding-ritual-wherein-bride-and-groom-hand.jpg?s=612x612&w=0&k=20&c=fTlNejRdY7dkvk742auNgI3j6Ve9UqqWSnb3QJ-D2gw="
            />

            <EventScrollCard
              title="Birthday"
               content="Fun-filled birthday celebrations"
               explore= {<>{"Explore Now "}<i class="fa-solid fa-angle-right"></i></>}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKUTrZ6mz3zVlt_LbecaRNE_nd44nKc6oGg&s"
            />

            <EventScrollCard
              title="Anniversary"
               content="Celebrate love & togetherness"
               explore= {<>{"Explore Now "}<i class="fa-solid fa-angle-right"></i></>}
              image="https://cheetah.cherishx.com/uploads/1691489119_original.jpg"
            />

            <EventScrollCard
              title="Baby Shower"
               content="Joyful beginnings beautifully planned"
               explore= {<>{"Explore Now "}<i class="fa-solid fa-angle-right"></i></>}
              image="https://m.media-amazon.com/images/I/71IC2lqIgdL._AC_UF1000,1000_QL80_.jpg"
            />

            <EventScrollCard
              title="Naming Ceremony"
               content="Traditional events with elegance"
               explore= {<>{"Explore Now "}<i class="fa-solid fa-angle-right"></i></>}
              image="https://aksharaentertainments.com/wp-content/uploads/2022/11/AK-55.jpg"
            />

            <EventScrollCard
              title="House Warming"
              content="Auspicious starts for your dream homes"
              explore= {<>{"Explore Now "}<i class="fa-solid fa-angle-right"></i></>} 
              image="https://symphonyevents.com.au/wp-content/uploads/2021/08/housewarming-04.jpg"/>
          </div>

        </div>
      </section>
     <section className="py-20 text-center bg-purple-50">
  <h2 className="text-3xl font-semibold mb-3">
    Ready to Plan Your Event?
  </h2>

  <p className="text-gray-600 mb-8">
    Get started today and let us help you create unforgettable memories
  </p>

  <div className="flex justify-center gap-4">
    <button className="px-6 py-3 border rounded-md hover:bg-black hover:text-white transition">
      View All Packages
    </button>

    <button className="px-6 py-3 border rounded-md hover:bg-black hover:text-white transition">
      Browse Products
    </button>

    <button className="px-6 py-3 border rounded-md hover:bg-black hover:text-white transition">
      Contact Us
    </button>
  </div>
</section> 
< Footer />
</div>
 
);
};

export default Home;
