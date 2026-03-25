import "./PostCard.css";
import posts from "./data/posts";
export default function PostCard() {
// const posts = {
    // date: "9 Mar, 2026",
    // id: 29,
// title: "Gen Z Is Redefining Luxury: Quality and Values Over Brand Names",
// image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
// // preview: "The next generation of consumers is reshaping luxury by prioritizing quality, sustainability, and authenticity.",}

    return (
    <div className="postCard">
        <img src={posts.image} alt={posts.title} className="post-image"/>
        <p className="post-date">{posts.date}</p>
        <h3 className="post-title">{posts.title}</h3>
        <p className="post-description">{posts.preview}</p>
        <p className="readArticle">Read Article</p>
    </div>
    );
}