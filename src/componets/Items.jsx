import React, { useContext } from "react";
import { DataContext } from "../context/arrayDataContext";
import { v4 as uuidv4 } from "uuid";

const Items = () => {
  const { arrayData } = useContext(DataContext);
  console.log(arrayData);
  return (
    <>
      <div className="foldit">
        {arrayData.map((item) => {
          return (
            <div key={uuidv4()}>
              <img className="image" src={item.img} alt={item.name} />
              <p
                style={{
                  margin: "10px 0 0 0",
                  fontWeight: "bold",
                }}
              >
                {item.name}
              </p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Items;
