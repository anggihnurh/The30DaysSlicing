const FeaturedPosts = () => {
  return (
    <article className="container mx-auto">
      <div className="flex items-center space-x-10">
        <img
          src="/featuredPostThumbnail.png"
          alt=""
          className="w-8/12 rounded-lg"
        />
        <div className="w-4/12  flex flex-col items-start space-y-6">
          <div className="flex items-center space-x-4">
            <p className="uppercase">UI Design</p>
            <p>&bull;</p>
            <p>July, 2 2021</p>
          </div>
          <h2 className="text-2xl ">
            Understanding color theory: the color wheel and finding
            complementary colors
          </h2>
          <p className=" text-white/60 text-md ">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.{" "}
          </p>
          <div className="flex items-center mt-20">
            <img src="/author-1.png" alt="auhtor" className="w-14" />
            <div className="ml-5">
              <p>Leslie Alexander</p>
              <p className="text-white/60 text-sm">UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedPosts;
