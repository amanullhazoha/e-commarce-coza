import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from "../style/carousel.module.scss";
import { Container } from "react-bootstrap";

const CAROUSEL = [
    { heading1: 'Men Collection 2021', heading2: 'New Arrivals', bgImg: 'https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2FheaderBg1.webp?alt=media&token=301b6ef5-0bb9-4b71-8512-79e7b5428114' },
    { heading1: 'Men -Secson', heading2: 'JACKETS & COATS ', bgImg: 'https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2FheaderBg2.webp?alt=media&token=03290795-a8ec-4891-9078-5de38b075a2d' },
    { heading1: 'Women Collection 2021 ', heading2: ' NEW SEASON', bgImg: 'https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2FheaderBg3i.webp?alt=media&token=c78edc56-5fb2-4b93-997f-d76198cf091f' },
    { heading1: 'Men ', heading2: ' Arrivals', bgImg: 'https://firebasestorage.googleapis.com/v0/b/cozastore-55708.appspot.com/o/photo%2FheaderBg1.webp?alt=media&token=301b6ef5-0bb9-4b71-8512-79e7b5428114' },
];

const Carousel = () => {
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState({ heading1: null, heading2: null, bgImg: null });

    useEffect(() => {
        if (index === CAROUSEL.length - 1) {
            setIndex(0);
        }
    }, [index]);

    const update = () => setIndex((prevState) => prevState + 1);

    useEffect(() => {
        const autoPlay = setInterval(update, 5000);

        return () => {
            clearInterval(autoPlay);
        };
    }, []);

    const carousel = useCallback(() => CAROUSEL.at(index), [index]);

    useEffect(() => {
        setValue(carousel());
    }, [carousel]);

    const handelDecrement = () => {
        if (index === 0) {
            setIndex(CAROUSEL.length - 1);
        }
        setIndex((prevState) => prevState - 1);
    };

    const handelIncrement = () => {
        if (index === CAROUSEL.length) {
            setIndex(0);
        }
        setIndex((prevState) => prevState + 1);
    };

    return (
        <section id={classes.carousel}>
            <div className={classes.bgImg} style={{ backgroundImage: `url(${value.bgImg})` }}>
                <Container className={classes.position}>
                    <div className={classes.content}>
                        <h2>{value.heading1}</h2>
                        <h1>{value.heading2}</h1>
                        <Link to="/shop">
                            <button type="button">shop now</button>
                        </Link>
                    </div>
                    <div className={classes.arrowBtn}>
                        <button
                            type="button"
                            className={classes.leftArrow}
                            onClick={handelDecrement}
                        >
                            <i className="fas fa-caret-left" />
                        </button>
                        <button
                            type="button"
                            className={classes.rightArrow}
                            onClick={handelIncrement}
                        >
                            <i className="fas fa-caret-right" />
                        </button>
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Carousel;
