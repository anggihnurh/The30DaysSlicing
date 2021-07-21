import InfoPost from "./InfoPost";
const FeaturedPosts = () => {
  return (
    <article>
      <div className="flex items-center space-x-10">
        <img
          src="/featuredPostThumbnail.png"
          alt=""
          className="w-8/12 rounded-lg"
        />
        <InfoPost
          authorAvatar="/author-1.png"
          authorJob="UI Design"
          authorName="Leslie Alexander"
          category="UI Design"
          date="July 2, 2021"
          shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
          title="Understanding color theory: the color wheel and finding complementary colors"
        />
      </div>
    </article>
  );
};

export default FeaturedPosts;
