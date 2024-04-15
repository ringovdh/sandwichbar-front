import {ReactElement, JSXElementConstructor, ReactNode, ReactPortal} from "react";

const Warning = (props: {
    message: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}) => {
    return (
        <div className="alert alert-danger" role="alert">
            {props.message}
        </div>
    );
}

export default Warning;