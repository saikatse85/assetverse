import { useEffect, useState } from "react";

const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/assets")
      .then((res) => res.json())
      .then((data) => setAssets(data));
  }, []);

  const filteredAssets = assets.filter((item) =>
    item.productName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-3">📦 Asset List</h2>

      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
        className="input input-bordered mb-4"
      />

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Date Added</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredAssets.map((asset) => (
            <tr key={asset._id}>
              <td>
                <img src={asset.productImage} className="w-12 h-12 rounded" />
              </td>
              <td>{asset.productName}</td>
              <td>{asset.productType}</td>
              <td>{asset.productQuantity}</td>
              <td>{new Date(asset.dateAdded).toLocaleDateString()}</td>

              <td className="flex gap-2">
                <button className="btn btn-sm btn-warning">Edit</button>
                <button className="btn btn-sm btn-error">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetList;
