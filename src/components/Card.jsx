import Avatar from "./Avatar";

const Card = ({ name, job, image, text }) => {
  return (
    <div className="w-1/2 mx-auto flex flex-col justify-center items-center">
      <Avatar name={name} image={image} />
      <div className="text-center">
        <h4 className="text-2xl text-primary">{name}</h4>
        <p className="text-2xl text-secondary">{job}</p>
        <p className="max-w-prose">{text}</p>
      </div>
    </div>
  );
};
export default Card;
