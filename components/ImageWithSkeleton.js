import Image from "next/image";
import { useState } from "react";

const ImageWithSkeleton = ({ src, alt, width, height }) => {
    const [loading, setLoading] = useState(true);

    const handleOnLoad = () => {
        setLoading(false)
    }

    return (
        <div className="relative">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                onLoad={handleOnLoad}
                style={{
                    filter: loading ? 'blur(20px)' : 'none',
                    transition: 'filter 0.3s ease-in-out'
                }}
            />
            {loading && (
                <div
                    className="absolute inset-0 flex justify-center items-center bg-gray-300"
                    style={{ backdropFilter: 'blur(10px)' }}
                ></div>
            )}
        </div>
    )
}

export default ImageWithSkeleton;