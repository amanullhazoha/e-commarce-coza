const TableHead = ({columns, ...rest}) => {
    return (
        <thead {...rest}>
            <tr>
                {columns.map(column => (
                    <td key={column.label}>{column.label}</td>
                ))}
            </tr>
        </thead>
    );
}
 
export default TableHead;