import { React } from 'react';
import { Button } from "react-bootstrap";
import terms1 from './images/terms1.png';

export default function FabServices() {
    return (
        <div>
            <img src={terms1} style={{ width: "100%" }} className="terms1Image" />
            <div className="fab-heading-left">
                <b className="termsheading">In need of a fabulous Services?</b>
                <p className="fab-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.<Button className='ml-5 aboutbutton'><b>Jellyit now</b></Button></p>
            </div>
        </div>
    )
}