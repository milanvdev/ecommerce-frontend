import MainLayout from "../mainLayout/MainLayout.jsx";
import SearchInput from "../../common/searchInput.jsx";
import AddIcon from "../../assets/svg/addIcon.svg?react"
import ImportIcon from "../../assets/svg/importIcon.svg?react"
import ProductTable from "./component/ProductTable.jsx";

const Product = () => {
    return (
        <MainLayout heading="Product" routeName="Product">
            <div className="mt-8 p-6 bg-white rounded-lg">
                <div className="flex justify-between">
                    <SearchInput placeholder="Search in product"/>
                    <div className="flex items-center gap-3">
                        <button
                            className="flex text-xs font-inter-semiBold items-center gap-2 bg-dodger-blue text-white p-3 rounded-xl">
                            <AddIcon/>Add
                            Product
                        </button>
                        <button
                            className="flex text-xs font-inter-semiBold items-center text-mine-shaft gap-2 p-3 border-alto border rounded-xl">
                            <ImportIcon/>Import
                            CSV
                        </button>
                    </div>
                </div>
                <ProductTable/>
            </div>
        </MainLayout>
    )
}
export default Product;
