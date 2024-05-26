import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const EditProduct = () => {
    const shoe = useLoaderData();

    const [id, setId] = useState(shoe.id);
    const [title, setTitle] = useState(shoe.title);
    const [brand, setBrand] = useState(shoe.brand);
    const [price, setPrice] = useState(shoe.price);
    const [description, setDescription] = useState(shoe.description);
    const [image_url, setImageURL] = useState(shoe.image_url);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.id.value;
        const title = form.title.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { id, title, brand, price, description, image_url };

        await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then((data) => console.log(data));
        toast.success('Shoe Edited Successfully', {
            position: "top-right",
            autoClose: 2000});
    }

    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Edit Product</h1>
            <div className="my-8">
                <form onSubmit={handleSubmit}>
                    <div className="mt-4">
                    <label htmlFor="id">Id</label>
                        <input type="text" className="bg-gray-100 p-4 w-full border border-black rounded-lg" name="id" placeholder="ID" value={id} onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className="mt-4">
                    <label htmlFor="title">Title</label>
                        <input type="text" className="bg-gray-100 p-4 w-full border border-black rounded-lg" name="title" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mt-4">
                    <label htmlFor="brand">Brand</label>
                        <input type="text" className="bg-gray-100 p-4 w-full border border-black rounded-lg" name="brand" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
                    </div>
                    <div className="mt-4">
                    <label htmlFor="price">Price</label>
                        <input type="number" className="bg-gray-100 p-4 w-full border border-black rounded-lg" name="price" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className="mt-4">
                    <label htmlFor="description">Description</label>
                        <textarea className="bg-gray-100 p-4 w-full border border-black rounded-lg" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="mt-4">
                    <label htmlFor="image_url">Image URL</label>
                        <input type="text" className="bg-gray-100 p-4 w-full border border-black rounded-lg" name="image_url" placeholder="Image URL" value={image_url} onChange={(e) => setImageURL(e.target.value)} />
                    </div>
                    <div className="mt-4">
                        <input type="submit" className="btn mt-4 w-full bg-red-500 text-white p-4" value="Edit Product" />
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default EditProduct;