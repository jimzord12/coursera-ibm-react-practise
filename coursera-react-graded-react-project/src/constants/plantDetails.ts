import { Plant } from "../redux/plantsSlice";

export const airPurifying: (Omit<Plant, "quantity"> & {
  img: string;
})[] = [
  {
    id: 201,
    name: "Spider Plant",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Spider plants are one of the easiest houseplants to care for, making them a great option for beginners or forgetful owners.",
    price: 200,
  },
  {
    id: 202,
    name: "Peace Lily",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Peace lilies are a great option for those who are new to caring for houseplants.",
    price: 35,
  },
  {
    id: 203,
    name: "Aloe Vera",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Aloe vera plants are easy to grow and make great houseplants.",
    price: 50,
  },
  {
    id: 204,
    name: "Snake Plant",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Snake plants are easy to care for and can help improve indoor air quality.",
    price: 30,
  },
  {
    id: 205,
    name: "Rubber Plant",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Rubber plants are easy to grow and care for, making them a great option for beginners.",
    price: 40,
  },
  {
    id: 206,
    name: "Pothos",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Pothos plants are easy to care for and can help purify the air in your home.",
    price: 25,
  },
];

export const aromaticPlants: (Omit<Plant, "quantity"> & {
  img: string;
})[] = [
  {
    id: 301,
    name: "Lavender",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Lavender plants are easy to grow and can help reduce stress and anxiety.",
    price: 20,
  },
  {
    id: 302,
    name: "Mint",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Mint plants are easy to grow and can be used in a variety of dishes and drinks.",
    price: 15,
  },
  {
    id: 303,
    name: "Rosemary",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Rosemary plants are easy to grow and can be used in a variety of dishes.",
    price: 25,
  },
  {
    id: 304,
    name: "Basil",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Basil plants are easy to grow and can be used in a variety of dishes.",
    price: 10,
  },
  {
    id: 305,
    name: "Thyme",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    desc: "Thyme plants are easy to grow and can be used in a variety of dishes.",
    price: 10,
  },
];

export const plantsDetails = [...airPurifying, ...aromaticPlants];
