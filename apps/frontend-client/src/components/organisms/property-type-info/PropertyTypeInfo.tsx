import { RealEstateItem } from "@/libs/types/api-properties/property-response";
import dynamic from "next/dynamic";
const Home2 = dynamic(()=>import("@/icons").then(icon => icon.Home2));
const BathRoom2 = dynamic(()=>import("@/icons").then(icon => icon.BathRoom2));
const BedRoom2 = dynamic(()=>import("@/icons").then(icon => icon.BedRoom2));
const Area = dynamic(()=>import("@/icons").then(icon => icon.Area));
const Kitchen = dynamic(()=>import("@/icons").then(icon => icon.Kitchen));
const Parking = dynamic(()=>import("@/icons").then(icon => icon.Parking));

const PropertyTypeInfo = ({ property }: { property: RealEstateItem }) => {

  switch (property.category.toLowerCase()) {
    case "villa":
      return (
        <>
          {property.category && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <Home2 props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption md:text-helvetica-small lg:text-helvetica-paragraph  font-bold text-olive-green">
                PROPERTY TYPE
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.category}
              </div>
            </div>
          )}
          {property.detail.bed_room && (
            <div className=" text-center rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <BedRoom2 props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption lg:text-helvetica-paragraph  font-bold text-olive-green">
                bedrooms
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.detail.bed_room}
              </div>
            </div>
          )}
          {property.detail.bath_room && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <BathRoom2 props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption lg:text-helvetica-paragraph  font-bold text-olive-green">
                bathrooms
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.detail.bath_room}
              </div>
            </div>
          )}
          {property.detail.kitchen && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <Kitchen props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption lg:text-helvetica-paragraph  font-bold text-olive-green">
                kitchens
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                <p>{property.detail.kitchen}</p>
              </div>
            </div>
          )}
          {property.detail.land_size && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <Area props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption lg:text-helvetica-paragraph  font-bold text-olive-green">
                spacious life
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.detail.land_size}
              </div>
            </div>
          )}
          {property.detail.parking && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <Parking props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] lg:w-[35px] lg:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption lg:text-helvetica-paragraph  font-bold text-olive-green">
                parking
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.detail.parking}
              </div>
            </div>
          )}
        </>
      );
    case "shop":
      return (
        <>
          {property.detail.land_size && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <Area props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption md:text-helvetica-small lg:text-helvetica-paragraph  font-bold text-olive-green">
                spacious life
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.detail.land_size}

              </div>
            </div>
          )}
          {property.detail.parking && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <Parking props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption md:text-helvetica-small lg:text-helvetica-paragraph  font-bold text-olive-green">
                parking
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.detail.parking}
              </div>
            </div>
          )}
        </>
      );
    case "land":
      return (
        <>
          {property.detail.land_size && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <Area props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption md:text-helvetica-small lg:text-helvetica-paragraph  font-bold text-olive-green">
                spacious life
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.detail.land_size}
              </div>
            </div>
          )}
          {property.detail.road_size && (
            <div className=" text-center  rounded-[10px]">
              <div className="flex items-center justify-center mb-[7px]">
                <Area props="text-olive-green w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[30px] xl:h-[30px]" />
              </div>
              <div className="font-helvetica uppercase text-helvetica-caption md:text-helvetica-small lg:text-helvetica-paragraph  font-bold text-olive-green">
                read size
              </div>
              <div className="font-helvetica text-helvetica-paragraph2 font-black lg:text-helvetica-h3 uppercase text-charcoal">
                {property.detail.road_size}
              </div>
            </div>
          )}
        </>
      );
    default:
      return null;
  }
};

export default PropertyTypeInfo;
