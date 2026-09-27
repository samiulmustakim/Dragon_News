export const getCategories = async () => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/news/categories",
    );
    const data = await res.json();
    return data.data;
};
export const getNewsCategoriesId = async (category_id) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/category/${category_id}`,
    );
    const data = await res.json();
    return data.data;
};
export const getNewsDetailsById = async (_id) => {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/news/${_id}`,
    );
    const data = await res.json();
    return data.data[0];
};