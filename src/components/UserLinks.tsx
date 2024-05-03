import Link from "next/link";
import React from "react";
import { auth, signOut } from "../utils/auth";

const UserLinks = async () => {
  const session = await auth();
  return (
    <div>
      {session ? (
        <div>
          <Link href="/orders">Orders</Link>
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
