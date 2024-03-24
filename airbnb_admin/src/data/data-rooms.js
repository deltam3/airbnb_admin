import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/room-images/`;

export const rooms = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "room-001.jpg",
    description: "나쁜 방",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "room-002.jpg",
    description: "좋은 방.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "room-003.jpg",
    description: "럭셔리 방",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "room-004.jpg",
    description: "안방",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "room-005.jpg",
    description: "지하실",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "room-006.jpg",
    description: "화장실 없는 방",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "room-007.jpg",
    description: "화장실 있는 방",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "room-008.jpg",
    description: "주방 없는 방",
  },
];
