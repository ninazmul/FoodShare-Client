import { Link } from "react-router-dom";


const Header = () => {
    return (
      <div>
        <div className="relative">
          <div className="absolute z-10">
            <div className="hero">
              <div className="hero-content py-20 text-center">
                <div className="md:w-2/3">
                  <h1
                    data-aos="fade-left"
                    className="md:text-5xl text-2xl font-bold text-pink-700"
                  >
                    Spreading Love, One Meal Share at a Time!
                  </h1>
                  <p
                    data-aos="fade-right"
                    className="py-6 text-pink-900 md:text-xl"
                  >
                    "Food Share Community is a dedicated group of individuals
                    committed to providing nourishment and support to homeless
                    and underserved populations. Our mission is to reduce food
                    waste and share extra food with those in need, ensuring that
                    no one goes to bed hungry in our community. Join us in
                    making a difference, one meal at a time."
                  </p>
                  <Link
                    data-aos="fade-up"
                    to="/add"
                    className="btn bg-pink-700 text-white border-none"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/3fG8B56/close-up-people-holding-apples-bag.jpg"
                className="w-full rounded-lg h-[500px] hero-overlay bg-opacity-60"
              />
              <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide4"
                  className="btn btn-circle bg-pink-700 text-white border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle bg-pink-700 text-white border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/JvyN8BG/person-helping-their-elder-neighbour.jpg"
                className="w-full rounded-lg h-[500px]"
              />
              <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide1"
                  className="btn btn-circle bg-pink-700 text-white border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide3"
                  className="btn btn-circle bg-pink-700 text-white border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/xsfT9tb/volunteer-collecting-donation-box-from-another-volunteer.jpg"
                className="w-full rounded-lg h-[500px]"
              />
              <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide2"
                  className="btn btn-circle bg-pink-700 text-white border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide4"
                  className="btn btn-circle bg-pink-700 text-white border-none"
                >
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://i.ibb.co/QYKsC1z/woman-offering-food-neighbor.jpg"
                className="w-full rounded-lg h-[500px]"
              />
              <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href="#slide3"
                  className="btn btn-circle bg-pink-700 text-white border-none"
                >
                  ❮
                </a>
                <a
                  href="#slide1"
                  className="btn btn-circle bg-pink-700 text-white border-none"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;