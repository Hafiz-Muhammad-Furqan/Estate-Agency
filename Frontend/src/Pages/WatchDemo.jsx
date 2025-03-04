import { Facebook, Instagram, Twitter } from "lucide-react";
import demo from "/demo.gif";
import button from "/play-button.png";

export default function WatchDemo() {
  return (
    <section className="relative overflow-x-hidden">
      <div className="flex flex-col md:flex-row gap-x-3 h-screen justify-center items-center container mx-auto relative z-10 px-4">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <img
              src={button}
              alt=""
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[20%] cursor-pointer"
            />
            <img src={demo} alt="" className="w-full rounded-3xl" />
          </div>
        </div>

        {/* Text and CTA Section */}
        <div className="w-full md:w-1/2 text-white text-center md:text-right mt-8 md:mt-0">
          <h1 className="leading-none mb-4 text-3xl md:text-5xl font-semibold font-['Syne', sans-serif] italic text-[#1D3D58]">
            Discover How It Works – Watch the{" "}
            <span className="text-[#EBF212]">Full Demo</span> Now
          </h1>
          <a
            href="#"
            className="bg-[#EBF212] py-2 text-base inline-block rounded-full px-6 text-[#1D3D58] font-['Inter', sans-serif] font-semibold"
          >
            Watch the demo for free
          </a>
          <ul className="flex gap-x-3 justify-center md:justify-end mt-5">
            <li>
              <a href="#">
                <Facebook color="#174369" />
              </a>
            </li>
            <li>
              <Twitter color="#174369" />
            </li>
            <li>
              <Instagram color="#174369" />
            </li>
          </ul>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute top-[50%] left-[-10%] transform -translate-x-0 -translate-y-1/2 hidden md:block">
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#EBF21247] rounded-full">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="orbit w-8 h-8 md:w-10 md:h-10 bg-[#EBF212] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-[-20%] right-[-10%] transform -translate-x-0 -translate-y-1/2 hidden md:block">
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#EBF21247] rounded-full">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="orbit w-8 h-8 md:w-10 md:h-10 bg-[#EBF212] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
