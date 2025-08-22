import { memo } from "react";

import favicon from "../../shared/assets/footer/EMBLEM.svg";
import google from "../../shared/assets/footer/image 8.png";
import appstore from "../../shared/assets/footer/image 7.svg";
import list from "../../shared/assets/footer/Vector (7).svg";
import adver from "../../shared/assets/footer/Vector (8).svg";
import question from "../../shared/assets/footer/Vector (9).svg";
import phone from "../../shared/assets/footer/Vector (10).svg";
import movie from "../../shared/assets/footer/movie-line.svg";
import theater from "../../shared/assets/footer/clapperboard-line.svg";
import concert from "../../shared/assets/footer/Vector (11).svg";
import sport from "../../shared/assets/footer/basketball-line.svg";
import intstag from "../../shared/assets/footer/instagram-line.svg";
import face from "../../shared/assets/footer/facebook-circle-line.svg";
import yout from "../../shared/assets/footer/youtube-line.svg";

const Footer = () => {
  return (
    <div className="container p-[30px] flex justify-between bg-[#111111] rounded-[12px] mx-auto mt-[118px] mb-[40px] text-[#A1A1A1]">
      <div>
        <img src={favicon} alt="" />
        <div className="mt-[48px]">
          <img src={google} alt="" />
          <img src={appstore} alt="" className="mt-[8px]" />
        </div>
      </div>
      <div>
        <h4 className="text-white">О нас</h4>
        <div className="flex gap-2 py-2">
          <img src={list} alt="" />
          <p>Публичная оферта</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={adver} alt="" />
          <p className="text-[#C61F1F]">Реклама</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={question} alt="" />
          <p>F.A.Q</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={phone} alt="" />
          <p>Контакты</p>
        </div>
      </div>
      <div>
        <h4 className="text-white">Категории</h4>
        <div className="flex gap-2 py-2">
          <img src={movie} alt="" />
          <p>Кино</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={theater} alt="" />
          <p>Театр</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={concert} alt="" />
          <p>Концерты</p>
        </div>
        <div className="flex gap-2 py-2">
          <img src={sport} alt="" />
          <p>Спорт</p>
        </div>
      </div>
      <div>
        <div className="mb-[40px]">
          <h4 className="text-white pb-[20px]">Связаться с нами</h4>
          <strong className="text-[#C61F1F] font-medium text-[20px] ">
            +998 (95) 897-33-38
          </strong>
        </div>
        <div>
          <p className="text-white">Социальные сети</p>
          <div className="flex gap-5 pt-[10px]">
            <img src={intstag} alt="" />
            <img src={face} alt="" />
            <img src={yout} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
