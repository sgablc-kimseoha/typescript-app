import React from 'react';
import CSS from 'csstype';

interface IProps {
    readonly className?: string;
    readonly errorCode?: number | string;
    readonly errorMessage?: string;
    readonly id?: string;
    readonly style?: CSS.Properties;
}

const PageError: React.FC<IProps> = ({
    className = '',
    id,
    style = {},
    errorCode = 500,
    errorMessage,
}: IProps) => {
    return (
        <div
            className={`uiComponent_pageError ${className}`}
            id={id}
            style={style}
        >
            ERROR PAGE!!!
        </div>
    );
};

export default React.memo(PageError);
