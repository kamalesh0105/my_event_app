"use client";
import bcrypt from "bcryptjs";

const Counter = () => {
  const hashme = (e) => {
    e.preventDefault();
    var name = { name: "kamalesh" };
    const hash = bcrypt.hashSync(name.name, 10);
    console.log("first hash:" + hash);
    const isMatch = bcrypt.compareSync(hash, hash);
    if (isMatch) {
      console.log("Password Matches");
    } else {
      console.log("Not match");
    }
  };

  return (
    <div>
      <h1>Welcome to Hashing</h1>
      <button onClick={hashme} className="text-white bg-light">
        Click me
      </button>
    </div>
  );
};

export default Counter;
