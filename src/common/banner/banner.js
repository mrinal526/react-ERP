import React from "react";
import PropTypes from "prop-types";
import { ErrorSvg, WarringSvg, InfoSvg, SuccessSvg, ExitSvg } from "./icons";

const Banner = ({ type, onClose, icon, message }) => {
    const types = {
        "error": {icon: <ErrorSvg />, exitButton:  <ExitSvg color="#BF1D08" />, className: "alert alert-danger"},
        "warning": {icon: <WarringSvg />, exitButton:  <ExitSvg color="#573B00" />, className: "alert alert-warning"},
        "info": {icon: <InfoSvg />, exitButton:  <ExitSvg color="#006FBB" />, className: "alert alert-info"},
        "success": {icon: <SuccessSvg />, exitButton:  <ExitSvg color="#108043" />, className: "alert alert-success"},
    };

    const banner = types[type];

    return (
        <div className={banner.className} role="alert">
            {icon || banner.icon}
            <span>{message}</span>
            <button type="button" className="close" onClick={onClose}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
};

Banner.propTypes = {
    type: PropTypes.oneOf(["error", "warning", "info", "success"]).isRequired,
    onClose: PropTypes.func,
    icon: PropTypes.node,
    message: PropTypes.string
};

Banner.defaultProps = {
    onClose: () => {},
    icon: null,
    message: ""
};

export default Banner;
