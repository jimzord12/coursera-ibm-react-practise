import { AddOn } from "../redux/addOnsSlice";

export const addonsDetails: (Omit<AddOn, "quatity"> & {
  img: string;
})[] = [
  {
    id: 201,
    name: "Projectors",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    price: 200,
  },
  {
    id: 202,
    name: "Speaker",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    price: 35,
  },
  {
    id: 203,
    name: "Microphones",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    price: 45,
  },
  {
    id: 204,
    name: "Whiteboards",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    price: 80,
  },
  {
    id: 205,
    name: "Signage",
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
    price: 80,
  },
];
