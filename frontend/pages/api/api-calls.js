// Create
export async function FEAddItem(data) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch("http://localhost:8080/api/item", requestOptions);
}

// Create
export async function FEAddLocation(address) {
  const res = await fetch(`http://localhost:8080/api/coords/${address}`);
  const data = await res.json();

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch(`http://localhost:8080/api/location/${address}`, requestOptions);
}

// Read
export async function FEGetAllItems() {
  const res = await fetch("http://localhost:8080/api/items");
  const data = await res.json();
  return data;
}

// Read
export async function FEGetItem(itemID) {
  const res = await fetch(`http://localhost:8080/api/item/${itemID}`);
  const data = await res.json();
  return data;
}

// Read
export async function FEGetAllLocations() {
  const res = await fetch("http://localhost:8080/api/locations");
  const data = await res.json();
  const newRes = await fetch(
    `http://localhost:8080/api/weather/${JSON.stringify(data)}`
  );
  const newData = await newRes.json();
  return newData;
}

// Update
export async function FEUpdateItem(itemID, data) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  await fetch(`http://localhost:8080/api/item/${itemID}`, requestOptions);
}

// Delete
export async function FEDeleteItem(itemID) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  await fetch(`http://localhost:8080/api/item/${itemID}`, requestOptions);
}
