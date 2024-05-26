import SingleProducts from "../SingleProduct";

const Products = ({ data }) => {

    return (
        <div className="mb-10">
            <h1 className="my-8 text-2xl font-bold text-center">Our Latest Products</h1>
            <div className="flex justify-center gap-2 px-10">
                {
                    data.slice(0, 4).map((shoe) =>
                        <SingleProducts key={shoe.id} shoe={shoe} />
                    )
                }
            </div>
        </div>
    );
}

export default Products;