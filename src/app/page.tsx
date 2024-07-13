import fs from "fs";
import Link from "next/link";

const getPostMetaData = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

const HomePage = () => {
  const postMetaData = getPostMetaData();
  const postPreviews = postMetaData.map((slug, idx) => (
    <div key={idx}>
      <Link href={`/posts/${slug}`}>
        <h2>{slug}</h2>
      </Link>
    </div>
  ));

  return <main>{postPreviews}</main>;
};

export default HomePage;
