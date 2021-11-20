import { Outlet, useParams } from "react-router";

export default function Profile() {
  const { userId } = useParams();

  return (
    <>
      <p>Profile {userId}</p>

      <Outlet />
    </>
  );
}
