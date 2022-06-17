import PropTypes from "prop-types";

const Logo = ({ logo, title }) => {
  return (
    <div className="flex items-center">
      <img alt=" " src={logo} className="mr-3 h-6" />
      <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
        {title}
      </span>
    </div>
  );
};

Logo.propTypes = {
  title: PropTypes.string,
  logo: PropTypes.string,
};

Logo.defaultProps = {
  title: "Corona App",
  logo: "https://www.uni-jena.de/unijenamedia/studium/faq-fuer-studierende/symbolbild-virus.jpg?height=428&width=760",
};

export default Logo;
