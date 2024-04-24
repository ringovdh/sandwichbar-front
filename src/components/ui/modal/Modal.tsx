import "./Modal.css";
import {useEffect, useRef} from "react";


// @ts-ignore
export default function Modal({ children, open, onClose }) {

    const dialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const modal = dialog.current;

        if (open) {
            modal!.showModal()
        }
        return () => modal!.close()
    }, [open]);

    return (
        <dialog
            ref={dialog}
            className={`modal ${open ? "display-block" : "display-none"}`} onClose={onClose}>
            {children}
        </dialog>);
}