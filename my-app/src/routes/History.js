import React, { useEffect } from "react";

function History ({ history }) {
    const goHome = () => {
        history.goBack();
    }

    useEffect(() => {
        console.log(history);
    }, [history]);

    return (
        <div>
            <button onClick={goHome}>HOME</button>
        </div>
    );
}

export default History;