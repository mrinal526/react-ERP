import React from "react";

const TextArea = ({ rows, cols }) => {
    return <textarea className="form-control" rows={rows} cols={cols}></textarea>;
};

TextArea.defaultProps = {
    rows: 3,
    cols: 10
};

export default TextArea;
