import { useEffect } from "react";
import { ReadUser } from "../../api/user";

export default function User() {
  useEffect(() => {
    ReadUser({ id: 1 });
  }, []);

  return <div className="user">user</div>;
}
