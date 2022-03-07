import classes from "../style/featured.module.scss";

const FEATURED = [
    {
        img: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fproduct13.webp?alt=media&token=e049e171-3a05-4b4d-955c-0ed3d5d7d805",
        title: "Female T-Shirt IN Stripe",
        price: 19.00
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fproduct14.webp?alt=media&token=d93e0b17-32b0-4e9c-8caa-266582fbee76",
        title: "Mini Silver Mesh Watch",
        price: 27.13
    },
    {
        img: "https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2Fproduct10.webp?alt=media&token=750249a0-123c-470c-b031-7064bef3ca3e",
        title: "Esprit Ruffle Shirt",
        price: 78.65
    },
]

const Featured = () => {
    return (
        <div className={classes.content}>
            <h3>Featured Products</h3>
            <ul className={classes.featured}>
                {FEATURED.map(feature => (
                    <li key={feature.title}>
                        <img
                            src={feature.img}
                            className="img-fluid"
                            alt={feature.title}
                        />

                        <div className={classes.title}>
                            <p>{feature.title}</p>
                            <span>${feature.price}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default Featured;