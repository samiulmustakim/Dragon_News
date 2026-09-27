import Link from "next/link";
import React from "react";

const LeftSideber = ({categories, activeId}) => {
    return (
        <div>
            <h1 className="my-4 text-2xl"> All Caterogy</h1>
            <ul className="text-center text-gray-500">
                {categories.news_category.map((category) => {
                    return (
                        <li
                            className={` mt-2 rounded-lg ${activeId === category.category_id && "bg-purple-500 text-white"}`}
                            key={category.category_id}
                        >
                            <Link className="block py-4 px-9" href={`/category/${category.category_id}`}>{category.category_name}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LeftSideber;
