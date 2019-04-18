import React from 'react';
import './NoMatch.scss';

export const NoMatch = () => {
    return (
        <div className="noMatch">
            <h2 className="noMatch__header">Page does not exist :-(</h2>
            <p className="noMatch__point">Go back to <a href="/">main page</a></p>
        </div>
    )
}
      
export default NoMatch;









