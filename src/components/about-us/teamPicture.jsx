export default function TeamPicture() {
  const chefData = [
    {
      name: 'John Doe',
      imgSrc:
        'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=3417&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Jane Smith',
      imgSrc:
        'https://images.unsplash.com/photo-1654922207993-2952fec328ae?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Mike Johnson',
      imgSrc:
        'https://images.unsplash.com/photo-1695606452743-e4b6872df715?q=80&w=2785&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]

  return (
    <div className="mt-10 bg-gray-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {chefData.map((chef, index) => (
            <div key={index} className="text-center mx-2 w-1/3">
              <img
                src={chef.imgSrc}
                alt={`chef${index + 1}`}
                className="w-full h-auto object-cover mt-8"
              />
              <p className="mt-2 sm:text-sm lg:text-xl">{chef.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
