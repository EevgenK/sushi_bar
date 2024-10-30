import { imageMap, imageMapX } from "../img/maki/maki";
import { rollsMap, rollsMapX } from "../img/rolls/rolls";
export const maki = [
  {
    img: imageMap[1],
    imgX: imageMapX[1],
    name: "Spicy Tuna Maki",
    description:
      "A tantalizing blend of spicy tuna, cucumber, and avocado, harmoniously rolled in nori and seasoned rice.",
    price: 5,
    top: true,
    id: 1,
  },
  {
    img: imageMap[2],
    imgX: imageMapX[2],
    name: "Mango Maki",
    description:
      "Tempura-fried shrimp, cucumber, and cream cheese embrace a center of fresh avocado, delivering a satisfying contrast of textures.",
    price: 5,
    top: false,
    id: 2,
  },
  {
    img: imageMap[3],
    imgX: imageMapX[3],
    name: "Salmon Maki",
    description:
      "Shiitake mushrooms, avocado, and pickled daikon radish nestle within a roll of seasoned rice, coated with nutty sesame seeds.",
    price: 5,
    top: false,
    id: 3,
  },
  {
    img: imageMap[4],
    imgX: imageMapX[4],
    name: "Tuna Maki",
    description:
      "A vibrant assortment of julienned carrots, bell peppers, and cucumber, tightly encased in a nori-wrapped rice roll.",
    price: 5,
    id: 4,
  },
];
export const rolls = [
  {
    img: rollsMap[1],
    imgX: rollsMapX[1],
    name: "Eternal Eel Enchantment",
    description:
      "An enchanting blend of eel tempura, foie gras, and cucumber, elegantly layered with truffle oil and gold leaf for a touch of opulence.",
    price: 16,
    top: true,
    id: 1,
  },
  {
    img: rollsMap[2],
    imgX: rollsMapX[2],
    name: "Mango Tango Fusion",
    description:
      "Tempura shrimp, cucumber, and avocado dance alongside sweet mango slices, drizzled with a tangy mango sauce.",
    price: 16,
    id: 2,
  },
  {
    img: rollsMap[3],
    imgX: rollsMapX[3],
    name: "Sunrise Bliss",
    description:
      "A delicate combination of fresh salmon, cream cheese, and asparagus, rolled in orange-hued tobiko for a burst of sunrise-inspired flavors.",
    price: 16,
    top: true,
    id: 3,
  },
  {
    img: rollsMap[4],
    imgX: rollsMapX[4],
    name: "Pacific Firecracker",
    description:
      "Spicy crab salad, tempura shrimp, and jalapeño peppers combine in a fiery ensemble, accented with a chili-infused aioli.",
    price: 16,
    top: true,
    id: 4,
  },
  {
    img: rollsMap[5],
    imgX: rollsMapX[5],
    name: "Truffle Indulgence",
    description:
      "Decadent slices of black truffle grace a roll of succulent wagyu beef, cucumber, and microgreens, culminating in an exquisite umami symphony.",
    price: 16,
    id: 5,
  },
];
