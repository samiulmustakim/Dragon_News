import LeftSideber from "@/components/homepage/news/LeftSideber";
import RightSideber from "@/components/homepage/news/RightSideber";
import NewsCard from "@/components/shared/NewsCard";
import { getCategories, getNewsCategoriesId } from "@/lib/data";



export default async function Home() {
    const categories = await getCategories();
    const news = await getNewsCategoriesId('01')
    

    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto mt-15">
            <div className="font-semibold text-xl col-span-3 ">
                <LeftSideber
                    activeId={"01"}
                    categories={categories}
                ></LeftSideber>
            </div>
            <div className="font-semibold text-xl col-span-6 ">
                <h1 className="my-4 text-2xl">Dragon News Home</h1>
                <div className="flex gap-3 flex-col">
                    {news.length > 0 ? (
                    news.map((n) => {
                        return <NewsCard  key={n._id} news={n}></NewsCard>;
                    })
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="text-5xl mb-4">📰</div>
                        <h1 className="text-2xl font-bold text-gray-700">
                            No News Found
                        </h1>
                        <p className="text-gray-500 mt-2">
                            Sorry, we couldnot find any news in this category.
                        </p>
                    </div>
                )}
                </div>
            </div>
            <div className="font-semibold text-xl col-span-3 ">
                <RightSideber></RightSideber>
            </div>
        </div>
    );
}
