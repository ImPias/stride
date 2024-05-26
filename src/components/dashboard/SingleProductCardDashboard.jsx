import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SingleProductCardDashboard = ({ shoe, handleDeletedProduct }) => {
    const { id, title, brand, price, description, image_url } = shoe;

    const handleDelete = async () => {
        if (confirm(`Do you want to delete ${title}?`)) {
            await fetch(`http://localhost:3000/shoes/${id}`, {
                method: "DELETE"
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    handleDeletedProduct(id);
                    toast.success('Shoe Deleted Successfully', {
                        position: "top-right",
                        autoClose: 2000});
                });
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image_url} className="h-[400px]" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className="text-xl font-semibold">{brand}</h3>
                <h3 className="text-xl font-semibold">{price}</h3>
                <p>{description}</p>
                <div className="card-actions justify-center mt-3">
                    <button className="btn bg-indigo-500 text-white">
                        <Link to={`/product/${id}`}>See Details</Link>
                    </button>
                    <button className="btn bg-green-600 text-white">
                        <Link to={`edit/${id}`}>Edit</Link>
                    </button>
                    <button onClick={handleDelete} className="btn bg-red-500 text-white">
                        Delete
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default SingleProductCardDashboard;