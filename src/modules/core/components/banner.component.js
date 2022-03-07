import classes from '../style/banner.module.scss';

const Banner = ({ imgName, tilte }) => (
    <section id={classes.banner} style={{ backgroundImage: `url(${imgName})` }}>
        <h1>{tilte}</h1>
    </section>
);

export default Banner;
