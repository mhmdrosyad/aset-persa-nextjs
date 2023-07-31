const GaleriPersa = () => {
    return (
        <div className="flex flex-col lg:px-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 mt-8">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="w-full h-48 bg-gray-300"></div>
            </div>
            <button className="hover:translate-y-2 hover:bg-yellow-500 duration-200 ms-auto bg-yellow-400 px-8 py-3 text-neutral-900">View All</button>
        </div>
    )
}

export default GaleriPersa;