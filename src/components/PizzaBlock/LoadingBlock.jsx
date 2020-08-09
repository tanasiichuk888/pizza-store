import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={0}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb">
            <circle cx="128" cy="127" r="122" />
            <rect x="-2" y="272" rx="6" ry="6" width="280" height="20" />
            <rect x="-2" y="300" rx="6" ry="6" width="280" height="92" />
            <rect x="0" y="411" rx="6" ry="6" width="87" height="29" />
            <rect x="43" y="450" rx="0" ry="0" width="15" height="2" />
            <rect x="133" y="406" rx="20" ry="20" width="145" height="42" />
        </ContentLoader>
    );
}

export default LoadingBlock