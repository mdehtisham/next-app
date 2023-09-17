import { Spinner } from "../../components/bootstrap";

export default function Loading(){
    return (
        <Spinner className="d-block m-auto" animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    )
}