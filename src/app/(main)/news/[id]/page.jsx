import React from "react";
import { getNewsDetailsById } from "@/lib/data";
import Image from "next/image";
import RightSideber from "./../../../../components/homepage/news/RightSideber";
import Link from "next/link";

export const generateMetadata = async ({ params }) => {
    const { id } = await params
    const news = await getNewsDetailsById(id)
    return {
        title: news.title,
        description: news.details
    }
}

const NewsDetails = async ({ params }) => {
    const { id } = await params;
    const news = await getNewsDetailsById(id);
    return (
        <div className="grid grid-cols-12 container mx-auto gap-5 pt-10">
            <div className="card bg-base-100  shadow-sm col-span-9">
                <figure>
                    <Image
                        width={1200}
                        height={1200}
                        src={news.image_url}
                        alt="news"
                    />
                </figure>
                <div className="card-body space-y-2">
                    <h2 className="card-title">{news.title}</h2>
                    <p>{news.details}</p>
                    <Link href={`/category/${news.category_id}`}>
                        <button className="btn bg-red-600 text-white">
                            All news in this category
                        </button>
                    </Link>
                </div>
            </div>
            <div className="col-span-3">
                <RightSideber></RightSideber>
            </div>
        </div>
    );
};

export default NewsDetails;
