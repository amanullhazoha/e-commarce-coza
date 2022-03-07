import classes from "../style/map.module.scss";

const Map = () => {
    return (
        <section id={classes.map}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239271334!2d90.27923787208863!3d23.780887456058103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1633529657686!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                title="hi"
            />
        </section>
    );
}
 
export default Map;