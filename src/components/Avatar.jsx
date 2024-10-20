import { FaQuoteLeft } from "react-icons/fa";

const Avatar = ({ name, image }) => {
  return (
    <div className="avatar relative ">
      <FaQuoteLeft className="absolute w-20 top-5 -left-10 text-secondary" />
      <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2 ">
        <img src={image} alt={name} />
      </div>
    </div>
  );
};
export default Avatar;
