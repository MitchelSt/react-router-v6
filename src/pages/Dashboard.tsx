import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const onClick = () => {
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  return (
    <>
      <p>Dashboard</p>
      <Link to="/profile">Go to profile page</Link>
      <button onClick={onClick}>Profile page</button>
    </>
  );
}
