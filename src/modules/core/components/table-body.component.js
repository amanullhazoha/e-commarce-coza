import { Fragment } from "react";

let count = 0;

const TableBody = ({ columns, items }) => {
    return (
        <tbody>
            {items.map(item => (
                <tr key={item.id}>
                    {columns.map(column => (
                        <Fragment key={count} {...count++}>
                            {column.content(item, column.path)}
                        </Fragment>
                    ))}
                </tr>
            ))}
        </tbody>
    );
}
 
export default TableBody;