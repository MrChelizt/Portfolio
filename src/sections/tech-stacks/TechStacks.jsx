import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import techStacks from "./data";
import TechStack from "./TechStack";

import "./tech-stack.css";

export default function TechStacks() {
  return (
    <section id="tech-stacks">
      <h2>My Tech Stack</h2>
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {techStacks.map((techStack) => (
            <SwiperSlide key={techStack.id}>
              <TechStack techStack={techStack} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
