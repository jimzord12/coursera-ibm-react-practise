interface ServiceCardProps {
  data: {
    id: number;
    name: string;
    img: string;
    price: number;
    quantity?: number;
    capacity?: number;
  } | {
    breakfastPrice: number,
    highTeaPrice: number,
    lunchPrice: 65,
    dinnerPrice: 70,
  }
}

const ServiceCard = ({ data }: ServiceCardProps) => {
  return <div>ServiceCard</div>;
};

export default ServiceCard;
