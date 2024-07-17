import React from 'react'
import Image from 'next/image'

function FavoriteCardComponent({ recipe, src, alt }) {
    return (
        <div className="col-span-1 rounded-xl border-0 shadow-lg flex flex-col gap-4 p-3">
            <div className="p-2">
                <Image
                    src={src}
                    alt={alt}
                    width={500}
                    height={500}
                    className="rounded-xl object-cover"
                />
            </div>
            <p className="font-semibold text-stone-800">{recipe}</p>
        </div>
    )
}

export default FavoriteCardComponent
