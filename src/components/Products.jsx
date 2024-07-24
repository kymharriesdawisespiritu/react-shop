import { useEffect, useState } from "react";
export default function Products() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch("https://freetestapi.com/api/v1/actresses")
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.log(error));
  });
  return (
    <>
      <div>
        <div className="card-group d-flex flex-wrap mt-5 justify-content-evenly">
          {item.slice(0, 40).map((items) => (
            <div
              className="col img-fluid relative flex m-3 w-25 h-25 object-fit-lg-contain border rounded "
              // style={{ width: "200px", height: "100px" }}
            >
              <img
                src={items.image}
                className="card-img-top object-fit-cover  "
                style={{ width: "150px", height: "200px" }}
              />
              <div className="card-body">
                <h4>{items.name}</h4>
                <p className="sm card-text">{items.biography}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
