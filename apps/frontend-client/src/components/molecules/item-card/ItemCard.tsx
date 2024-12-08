"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { RealEstateItem } from "@/libs/types/api-properties/property-response";
const HeartOutline = dynamic(() => import("@/icons").then((mod) => mod.HeartOutline));
const HeartInline = dynamic(() => import("@/icons").then((mod) => mod.HeartInline));
const BathRoom = dynamic(() => import("@/icons").then((mod) => mod.BathRoom));
const BedRoom = dynamic(() => import("@/icons").then((mod) => mod.BedRoom));
const Compare = dynamic(() => import("@/icons").then((mod) => mod.Compare));

export interface ItemCardProps {
  item: RealEstateItem;
  flexRow?: boolean;
}

const ItemCard = ({ item, flexRow }: ItemCardProps) => {
  // const flexRow = false;
  const [isLike, setIsLike] = useState(false);
  const toggleIsLike = () => {
    setIsLike((isLike) => !isLike);
  };
  return (
    <div className={flexRow ? " flex w-full h-[150px] sm:h-[170px] md:h-[150px] gap-3 rounded-[20px] overflow-hidden shadow-md   bg-white border-[1px] border-neutral p-4"
      : "w-full h-[380px] rounded-[20px] overflow-hidden shadow-md flew flex-col gap-5 bg-white border-[1px] border-neutral p-4"
    }>
      <div className={flexRow
        ? "bg-olive-green w-[50%] relative overflow-hidden z-10 b rounded-[15px] hover:transition-all duration-1000 ease-out "
        : "w-full h-[65%] relative overflow-hidden z-10 bg-olive-green rounded-[15px] hover:transition-all duration-1000 ease-out  "
      }>
        <Link
          href={`/detail/${item.id}`}
          className=" absolute w-full h-full rounded-[15px] overflow-hidden transition-transform duration-300 transform hover:scale-110"
        >
          <div className=" group absolute left-0 top-0 w-full h-full hover:bg-[#00000033] z-2 transition duration-300">
            {/* dfdfd */}
          </div>
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={500}
            height={500}
            className="w-full h-full object-cover "
          />
        </Link>

        {/* Item Type */}
        <p
          className={
            flexRow
              ? "absolute py-[3px] px-4 top-[10px] left-[17px] sm:left-[10px] bg-olive-green text-white text-[12px] rounded-[13px]  font-[600] "
              : "absolute py-[3px] px-4 top-[10px] left-[17px] sm:left-[10px] bg-olive-green text-white text-[14px] rounded-[13px]  font-[600] "
          }
        >
          {item.category}
        </p>

        {/* Favorite Icon */}
        <div
          className="absolute top-[10px] right-[17px] sm:right-[10px] cursor-pointer"
          onClick={toggleIsLike}
        >
          {isLike ? (
            <HeartInline
              props={
                flexRow ? "text-white text-[18px]" : "text-white text-[25px]"
              }
            />
          ) : (
            <HeartOutline
              props={
                flexRow ? "text-white text-[18px]" : "text-white text-[25px]"
              }
            />
          )}
        </div>

        {/* Price */}
        <p className="absolute bottom-[10px] left-[17px] sm:left-[10px] text-white font-helvetica font-[600] text-[16px] ">
          ${item.price}10,00
        </p>
      </div>
      <div className={flexRow ? " flex flex-col text-[14px] gap-1 w-[50%]"
        : "flex flex-col gap-1 py-5 "
      }>
        <p className={" capitalize font-[600] text-olive-drab "}>
          {item.title}
        </p>
        <p className={flexRow ? "mb-5" : ""}>{item.address}</p>
        <div className=" bottom-0 sm:bottom-[10px] w-full">
          <div className="flex  items-center">
            <div
              className={
                flexRow
                  ? "w-[60%] sm:w-[65%] flex gap-3 items-center"
                  : "w-[50%] sm:w-[65%] gap-7 flex items-center"
              }
            >
              <div className="flex  justify-between  font-helvetica text-helvetica-paragraph  ">
                <BathRoom
                  props={
                    flexRow
                      ? "text-[18px] text-olive-drab"
                      : " text-[20px] text-olive-drab "
                  }
                />
                <span
                  className={
                    flexRow
                      ? "font-[600] text-[10px]"
                      : "font-[600] text-[12px]"
                  }
                >
                  {item.detail.bath_room} Bath
                </span>
              </div>
              <div className="flex  justify-between   font-helvetica text-helvetica-paragraph font-bold">
                <BedRoom
                  props={
                    flexRow
                      ? "text-olive-drab text-[18px]"
                      : " text-olive-drab  text-[20px]"
                  }
                />
                <span
                  className={
                    flexRow
                      ? "font-[600] text-[10px]"
                      : "font-[600] text-[12px]"
                  }
                >
                  {item.detail.bed_room} Bed
                  {item.category}
                </span>
              </div>
            </div>
            <div className="w-[40%] sm:w-[35%] flex justify-end items-center">
              <Compare props="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
