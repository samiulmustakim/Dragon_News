import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";

const NewsCard = ({ news }) => {
    return (
        <div className="">
            <div className="card bg-base-100 shadow-sm">
                <div className="flex items-center justify-between bg-gray-300 px-5 py-4">
                    <div className="flex items-center gap-3">
                        <Image
                            className="rounded-full"
                            src={news.author.img}
                            alt="news image"
                            width={50}
                            height={50}
                        />
                        <div className="text-lg">
                            <h1>{news.author?.name}</h1>
                            <p className="text-sm font-light">
                                {news.author?.published_date}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <CiBookmark className="text-2xl" />
                        <IoShareSocialOutline className="text-2xl" />
                    </div>
                </div>
                <div className="px-5 pb-4">
                    <div className="card-body px-0">
                        <h2 className="card-title">{news.title}</h2>
                    </div>
                    <figure>
                        <Image
                            src={news.image_url}
                            alt="news image"
                            width={800}
                            height={800}
                        />
                    </figure>
                    <p className="font-medium pt-5 text-sm line-clamp-4 leading-6 text-gray-500">
                        {news.details}
                    </p>
                    <Link
                        className="text-sm text-orange-400"
                        href={`/news/${news._id}`}
                    >
                        Read More
                    </Link>
                    <div className="text-lg pt-3 flex justify-between items-center">
                        <p className="flex items-center gap-1">
                            <FaStar className="text-orange-400" />
                            <FaStar className="text-orange-400" />
                            <FaStar className="text-orange-400" />
                            <FaStar className="text-orange-400" />
                            {news.rating.number}
                        </p>
                        {/* right */}
                        <p className="flex items-center gap-1">
                            <FaEye className="text-gray-400" />
                            {news?.total_view}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
