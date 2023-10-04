const search = ()=>{
   return <>
   
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-6 w-6 text-gray-300 cursor-pointer"
  fill=" "
  viewBox="0 0 28 248"
  stroke="currentColor"
  style={{display:"flex",justifyContent:"center",alignItems:"center"}}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M4 12a8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8zm0 0v0"
  />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M15 15l5.25 5.25"
  />
</svg>
<input
  type="text"
  placeholder="Search for products, brands and more"
  className="border rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500 text-black"
  style={{ fontFamily: 'Arial', fontSize: '20px', width: '800px', }}
 
/>

   </>
}
export default search;