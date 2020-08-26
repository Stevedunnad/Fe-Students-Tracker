import React from 'react';
import { Link } from '@reach/router'

const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link> |{" "}
      <Link to="/students">Students</Link> |{" "}
      <Link to="/graduates">Graduates</Link> |{" "}
      <Link to="/blocks">Blocks</Link>
    </div>
  );
};

export default Nav;