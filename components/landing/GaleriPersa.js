const GaleriPersa = () => {
    return (
        <div className="flex flex-col px-12 lg:px-3">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-8 mt-8">
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="w-full h-48 bg-gray-300"></div>
                <div className="w-full h-48 bg-gray-300"></div>
            </div>
            <button className="ms-auto bg-yellow-400 px-8 py-3 text-neutral-900">View All</button>
        </div>
    )
}

export default GaleriPersa;