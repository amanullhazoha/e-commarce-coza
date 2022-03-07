const ColorFilter = ({ className, isActive, buttonValue, handleFilter }) => {
    return (
        <ul className={className}>
            {buttonValue.map((value) => (
                <li key={value}>
                    <span style={{ background: value === "all" ? "#EF6113" : `${value}` }} />
                    <button 
                        type="button" 
                        className={isActive === value.toLowerCase() ? "filterActive" : ""}
                        onClick={() => handleFilter(value)}
                    >
                        {value}
                    </button>
                </li>
            ))}
        </ul>
    );
}
 
export default ColorFilter;