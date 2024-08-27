import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer'

function App() {

  const [selectedValue, setSelectedValue] = useState('');
  const [post, setPost] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/categories').then((res) => res.json())
      .then((data) => setPost(data)
      );
  }, [])

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products").then((res) => res.json())
//     .then((data) => setPost(data)
//     );
// }, []);
// console.log( "post--->",  data);

// const filteredArr = post.filter(
//   (data) => data.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
// );
// const selectedArr = post.filter((data) => data.name.toLowerCase().indexOf(selectedValue.toLocaleLowerCase()) !== -1)



const filteredPost = post.filter((item) => {
  const nameLower = item.name.toLowerCase();
  const searchLower = search.toLowerCase();
  const selectedValueLower = selectedValue.toLowerCase();

  // Combined filtering condition
  return (
    (!searchLower || nameLower.indexOf(searchLower) !== -1) &&
    (!selectedValueLower || nameLower.indexOf(selectedValueLower) !== -1)
  );
});



return (
  <>
    <h1 className="text-center my-5 text-3xl font-semibold underline">
      E-Commerce
    </h1>
    <div className='mx-10 w-3/4 mx-auto ' >
      <select className='w-full border-2  p-3 font-bold' value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
        <option value="">Select an option</option>
        <option value="Clothes">Clothes</option>
        <option value="Electronics">Electronics</option>
        <option value="Furnitures">Furnitures</option>
        <option value="Shoes">Shoes</option>
        <option value="Miscellaneous">Miscellaneous</option>

      </select>
    </div>


    <div className="mx-10 w-3/4 mx-auto ">
      <input
        placeholder="Search"
        type="search"
        className="w-full border-2  p-3 font-bold"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
    <div className="flex flex-wrap m-4">
      {

        filteredPost.map((data) => (

          <div key={data.id} className="lg:w-1/4 md:w-1/2 p-2 w-full">
            <div className="border  rounded-md overflow-hidden">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={data.image}
                />
              </a>
              <div className="mt-4 p-2">

                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {data.name}
                </h2>
                <p class="mt-1">{data.creationAt}</p>
              </div>
            </div>
          </div>

        ))

      }


      {/* 
        {

          filteredArr.map((data) => (
            <div key={data.id} className="lg:w-1/4 md:w-1/2 p-2 w-full">
              <div className="border  rounded-md overflow-hidden">
                <a className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt="ecommerce"
                    className="object-cover object-center w-full h-full block"
                    src={data.image}
                  />
                </a>
                <div className="mt-4 p-2">

                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {data.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}

 */}

    </div>


  </>
)
}

export default App
