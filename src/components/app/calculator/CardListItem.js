import React from 'react';
import { Card, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

function CardListItem({
    title,
    className,
    href = '/calculator',
    imgSrc = '/assets/app/calculator/ExCalculator.jpg',
}) {
    return (
        <Link className={className} href={href}>
            <Card className='shadow-lg p-4 flex flex-col md:flex-row lg:flex-row'>
                <div className='flex justify-center'>
                    <Image
                        src={imgSrc}
                        width={100}
                        height={100}
                        alt='Calculator Image'
                        className='rounded-xl'
                    />
                </div>
                <CardHeader className='font-semibold'>{title}</CardHeader>
            </Card>
        </Link>
    );
}

export default CardListItem;
