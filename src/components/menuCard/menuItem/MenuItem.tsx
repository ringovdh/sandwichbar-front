import {PropsWithChildren, ReactNode} from "react";

interface MenuItemProps {
    title: String;
    children: ReactNode
}

const MenuItem = (props: PropsWithChildren<MenuItemProps>) => {

    return (
        <div className="menu-item-container">
            <h2>{props.title}</h2>
            <ul id="menu-item-items">
                {props.children}
            </ul>
        </div>
    );
}

export default MenuItem