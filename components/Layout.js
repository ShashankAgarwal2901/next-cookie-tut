import Link from "next/link";
import { logOut } from "../lib/auth";

const Layout = (props) => {
  const { user = {} } = props.auth || {};
  return (
    <div className="root">
      <nav className="navbar">
        <span>
          Welcome , <strong>{user.name || "Guest"}</strong>
        </span>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          {user.email ? (
            <React.Fragment>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
              <button onClick={logOut}>Logout</button>
            </React.Fragment>
          ) : (
            <Link href="/login">
              <a>Log in</a>
            </Link>
          )}
        </div>
      </nav>
      <h1>{props.title}</h1>
      {props.children}

      <style jsx>
        {`
        .root{
            display:flex;
            align-items:center;
            justify-content:center;
            flex-direction:column;

        }
        .navbar{
            width:100%;
            display:flex;
            justify-content:space-around;
        }

        .navbar a{
            margin-right 0.5em;
        }

        button{
            text-decoration:underline;
            cursor:pointer;
            padding:0;
            border-style:none;
            font:inherit;
            color:rgb(0,0,238)

        }
          `}
      </style>
    </div>
  );
};

export default Layout;
