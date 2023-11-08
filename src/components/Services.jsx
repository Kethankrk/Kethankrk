import React from "react";

export default function Services({ name, description, imageLink }) {
  return (
    <div className="card card-compact md:w-[300px] lg:w-[400px] bg-base-200 shadow-xl hover:bg-primary-focus hover:text-base-100">
      <div className="pt-5 pl-10">
        <img src={`/${imageLink}`} alt="Shoes" className="h-[80px]" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
