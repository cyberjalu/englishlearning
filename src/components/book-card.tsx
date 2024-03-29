import React from 'react';
import Image from "next/image";

import {
    Typography,
    Card,
    CardBody,
    CardHeader,
  } from "@material-tailwind/react";
import Link from 'next/link';
  
  interface BookCardProps {
    img: string;
    title: string;
    // desc: string;
    category: string;
    // price: string;
    // offPrice?: string;
    href: string;
  }
  
  export function BookCard({
    img,
    category,
    title,
    href,
  }: BookCardProps) {
    return (
      <Card placeholder={undefined} color="transparent" shadow={false}>
        <CardHeader placeholder={undefined} color="gray" floated={false} className="mx-0 mt-0 mb-6">
          <Link href={href}>
            <Image
              width={768}
              height={768}
              src={img}
              alt={title}
              className="h-full w-full scale-[1.1] object-cover object-center"
            />
          </Link>
        </CardHeader>
        <CardBody placeholder={undefined} className="p-0">
          <Typography placeholder={undefined} color="blue" className="mb-2 text-xs !font-semibold">
            {category}
          </Typography>
          <Link href={href}>
            <Typography
            placeholder={undefined}
              variant="h5"
              color="blue-gray"
              className="mb-3 font-bold normal-case xl:w-64"
            >
              {title}
            </Typography>
          </Link>
          {/* <Typography placeholder={undefined} className="mb-4 font-normal !text-gray-500">
            {desc}
          </Typography> */}
          {/* <div className="flex gap-2">
            <Typography
            placeholder={undefined}
              variant="h5"
              color="blue-gray"
              className={offPrice ? "line-through" : ""}
            >
              {price}
            </Typography>
            <Typography placeholder={undefined} variant="h5" color="red">
              {offPrice}
            </Typography>
          </div> */}
        </CardBody>
      </Card>
    );
  }
export default BookCard