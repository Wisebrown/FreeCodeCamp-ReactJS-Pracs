import useFetch from "./fetcheHook";

const Fetching = () => {
  const { data, isLoading, error } = useFetch(
    // "https://jsonplaceholder.typicode.com/todos"
    "http://localhost:3000/api/products"
  );
    // console.log(data);
  if (isLoading) return <p>Loading...</p>

  if (error) return <p>There was a problem in fetching data</p>
  
  return (
    <div className="text-white grid grid-cols-4 gap-4">
      {data.map((product) => (
        <div key={product.id} className="border-2 rounded-lg p-4">
            <p>Name: {product.name}</p>
            <p>Price: {product.priceCents}</p>
        </div>
        
      ))}
    </div>
  );
}
export default Fetching;

