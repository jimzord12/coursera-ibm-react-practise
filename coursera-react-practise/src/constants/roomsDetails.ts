import { Room } from "../redux/roomSlice";

export const roomsDetails: (Omit<Room, "quatity"> & { img: string })[] = [
  {
    id: 101,
    name: "Conference Room",
    price: 1500,
    capacity: 15,
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
  },
  {
    id: 102,
    name: "Auditorium Hall",
    price: 5500,
    capacity: 200,
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
  },
  {
    id: 103,
    name: "Presidential Room",
    price: 3500,
    capacity: 50,
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
  },
  {
    id: 104,
    name: "Large Meeting Room",
    price: 1000,
    capacity: 10,
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
  },
  {
    id: 105,
    name: "Small Meeting Room",
    price: 800,
    capacity: 5,
    img: "https://cdn.icon-icons.com/icons2/3361/PNG/512/multimedia_communication_image_placeholder_photography_landscape_image_comics_picture_photo_gallery_image_icon_210828.png",
  },
];
