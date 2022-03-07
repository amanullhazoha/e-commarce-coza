const ButtonList = ({
    className,
    buttonValue,
    handelFilter,
    isActive,
}) => (
    <ul className={className}>
        {buttonValue.map((value) => (
            <li key={value.name}>
                <button
                    type="button"
                    className={isActive === value.name ? "filterActive" : ""}
                    onClick={() => handelFilter(value)}
                >
                    {value.name}
                </button>
            </li>
        ))}
    </ul>
);

export default ButtonList;
