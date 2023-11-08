import React from "react";

export default function ItemCard({ title, list }) {
  return (
    <div className="pb-2">
      <h3 className="mb-1 text-sm font-bold text-primary">{title}</h3>
      <ul className="">
        {list.map((item) => {
          return (
            <li className="">
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-3 h-3 fill-current dark:text-violet-400"
                >
                  <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                  <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                </svg>
                <h4 className="font-medium text-sm">{item}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
