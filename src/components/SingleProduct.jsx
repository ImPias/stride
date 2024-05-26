import { Link } from "react-router-dom";

const SingleProduct = ({ shoe }) => {
    const { id, title, brand, price, description, image_url } = shoe;

    return(
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h3 className="text-xl font-semibold">{brand}</h3>
                <h3 className="text-xl font-semibold">{price}</h3>
                <p>{description.length > 40 ? description.slice(0, 100) : description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link to={`/product/${id}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;