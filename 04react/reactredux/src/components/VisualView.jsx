import React, { useRef } from "react";

// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function VisualView() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      {/* 커스텀 네비게이션 버튼 */}
      <button ref={prevRef} className="custom-prev">
        Prev
      </button>
      <button ref={nextRef} className="custom-next">
        Next
      </button>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current, // 이전 버튼 엘리먼트
          nextEl: nextRef.current, // 다음 버튼 엘리먼트
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          // Swiper 인스턴스 생성 후 네비게이션 버튼 연결
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        onSlideChange={() => console.log("slide change")}
        style={{ height: "100vh" }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}

export default VisualView;
