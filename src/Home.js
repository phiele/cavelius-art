import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Welcome to my collection of art</h1>
        <p>
          Get illustrations and designs with our easy to use app,
          and your products delivered straight to your doorstep.
        </p>
        <Link to="/products" className="btn btn-default">
          Start shopping
        </Link>
      </div>
    </div>
  );
}
