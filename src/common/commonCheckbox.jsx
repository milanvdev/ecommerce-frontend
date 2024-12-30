const CheckBox = () => {
    return (
        <div className="flex items-center">
            <input
                id="checkbox"
                type="checkbox"
                className="w-4 h-4 bg-[#4B68FF] border-none  rounded"
            />
            <label className="ml-3 text-mine-shaft font-inter-medium text-sm">
                Remember me
            </label>
        </div>
    )
}
export default CheckBox;
