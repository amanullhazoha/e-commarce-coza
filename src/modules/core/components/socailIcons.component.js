const SocailIcons = ({ className }) => {
    return (
        <div className={className}>
            <ul>
                <li>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-facebook-f" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-instagram" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.pinterest.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-pinterest-p" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SocailIcons;
