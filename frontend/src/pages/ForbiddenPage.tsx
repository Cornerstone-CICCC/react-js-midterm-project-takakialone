import { Link } from "react-router";

function ForbiddenPage() {
  return (
    <div>
      <h1>You are not authorized to access here</h1>
      <Link to="/products">Go home</Link>
    </div>
  );
}

export default ForbiddenPage;
