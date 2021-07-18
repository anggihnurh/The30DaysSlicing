import Navbar from "@/components/Navbar";
import FeaturedPosts from "@/components/FeaturedPosts";
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <Navbar />
      <FeaturedPosts />
    </div>
  );
}
