const InfoPost = ({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob,
}) => {
  return (
    <div className="flex flex-col items-start space-y-6">
      <div className="flex items-center space-x-4">
        <p className="uppercase text-white/50 text-sm">{category}</p>
        <p className="text-white/50 text-sm">&bull;</p>
        <p className="text-white/50 text-sm">{date}</p>
      </div>
      <h2 className="text-2xl ">{title}</h2>
      <p className=" text-white/60 text-md ">{shortDescription}</p>
      <div className="flex items-center mt-20">
        <img src={authorAvatar} alt="auhtor" className="w-14" />
        <div className="ml-5">
          <p>{authorName}</p>
          <p className="text-white/60 text-sm">{authorJob}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoPost;
