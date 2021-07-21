import InfoPost from "./InfoPost";
const CardPost = ({ thumbnail, ...postProps }) => {
  return (
    <article>
      <img
        src={thumbnail}
        alt="thumbanil-post"
        className="w-full rounded mb-5"
      />
      <InfoPost {...postProps} />
    </article>
  );
};

export default CardPost;
