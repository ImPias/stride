import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const shoe = useLoaderData();
    const { title, brand, price, description, image_url } = shoe;

    return (
        <div className="text-center my-10">
            <h1 className="text-5xl text-center font-bold">{title}</h1>
            <div className="flex justify-center my-5">
                <img className="h-[400px] rounded-2xl" src={image_url} alt="Shoe Image" />
            </div>
            <h3 className="text-2xl my-2 font-semibold">Price: {price}$</h3>
            <h3 className="text-xl my-2 font-semibold">Brand: {brand}</h3>
            <p className="text-lg my-2">Description: {description}</p>
        </div>
    );
};

export default ProductDetails;