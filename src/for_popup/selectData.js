import bmw from "../assets/car-logo/bmw.png";
import ford from "../assets/car-logo/ford.png";
import toyota from "../assets/car-logo/toyota.png";
import audi from "../assets/car-logo/audi.png";
import honda from "../assets/car-logo/honda.png";
import hyundai from "../assets/car-logo/hyundai.png";
import jeep from "../assets/car-logo/jeep.jpg";
import kia from "../assets/car-logo/kia.jpg";
import landrover from "../assets/car-logo/landrover.png";
import mahindra from "../assets/car-logo/mahindra.png";
import mazda from "../assets/car-logo/mazda.jpg";
import mercedes from "../assets/car-logo/mercedes.png";
import mg from "../assets/car-logo/mg.png";
import mini from "../assets/car-logo/mini.jpg";
import mitsubishi from "../assets/car-logo/mitsubishi.png";
import nissan from "../assets/car-logo/nissan.jpg";
import peugeot from "../assets/car-logo/peugeot.jpg";
import renault from "../assets/car-logo/renault.jpg";
import ssangyong from "../assets/car-logo/ssangyong.png";
import suzuki from "../assets/car-logo/suzuki.png";
import car from "../assets/images/car.png";
import suv from "../assets/images/suv.png";
import pickup from "../assets/images/pickup.png";
import van from "../assets/images/van2.jpg";

const carMake = [
  { id: 1, name: "AUDI", img: audi },
  { id: 2, name: "BMW", img: bmw },
  { id: 3, name: "HONDA", img: honda },
  { id: 4, name: "TOYOTA", img: toyota },
  { id: 5, name: "Hyundia", img: hyundai },
  { id: 6, name: "FORD", img: ford },
  { id: 7, name: "Jeep", img: jeep },
  { id: 8, name: "KIA", img: kia },
  { id: 9, name: "Land Rover", img: landrover },
  { id: 10, name: "Mahindra", img: mahindra },
  { id: 11, name: "Mazda", img: mazda },
  { id: 12, name: "MG", img: mg },
  { id: 13, name: "Mercedes", img: mercedes },
  { id: 14, name: "Mini", img: mini },
  { id: 15, name: "Mitsubishi", img: mitsubishi },
  { id: 16, name: "Nissan", img: nissan },
  { id: 17, name: "Peugeot", img: peugeot },
  { id: 18, name: "Renault", img: renault },
  { id: 19, name: "Ssanyong", img: ssangyong },
  { id: 20, name: "Suzuki", img: suzuki },
];

const carType = [
  { id: 1, name: "Car", img: car },
  { id: 2, name: "Van", img: van },
  { id: 3, name: "SUV/Jeep", img: suv },
  { id: 4, name: "Pickups", img: pickup },
];

const carCondition = [
  { id: 1, name: "Antique" },
  { id: 2, name: "Brand New" },
  { id: 3, name: "Registered (Used)" },
  { id: 4, name: "Unregistered (Recondition)" },
];

export { carMake, carCondition, carType };
