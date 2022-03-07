import classes from "../style/arcrive.module.scss";

const AECRIVES = [
    { year: "July 2018", value: 9}, 
    { year: "June 2018", value: 39},
    { year: "May 2018", value: 35}, 
    { year: "April 2018", value: 29},
    { year: "March 2018", value: 27}, 
]

const Arcrive = () => {
    return (
        <div className={classes.content}>
            <h3>Archive</h3>
            <ul className={classes.archive}>
                {AECRIVES.map(archive => (
                    <li key={archive.year}>
                        <span>{archive.year}</span>
                        <span>({archive.value})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Arcrive;
