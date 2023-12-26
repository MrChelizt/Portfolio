import Modal from "../components/Modal";
import PrimaryColor from "./PrimaryColor";
import BackgroundColor from "./BackgroundColor";

import {primaryColors, backgroundColors} from "./data";

import "./theme.css";

export default function Theme() {
    return (
        <Modal className="theme__modal">
            <h3>Customize Your Theme</h3>
            <small>Change the primary and background color to your preference</small>
            <div className="theme__primary-wrapper">
                <h5>Primary Color</h5>
                <div className="theme__primary-colors">
                    {primaryColors.map((pColor) => (
                        <PrimaryColor key={pColor.className} className={pColor.className}/>
                    ))}
                </div>
            </div>
            <div className="theme__backgroud-wrapper">
                <h5>Background Color</h5>
                <div className="theme__backgroud-colors">
                    {backgroundColors.map((bColor) => (
                        <BackgroundColor
                            key={bColor.className}
                            className={bColor.className}
                        />
                    ))}
                </div>
            </div>
        </Modal>
    );
}
