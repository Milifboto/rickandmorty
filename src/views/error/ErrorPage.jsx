import errorImg from "../../assets/error404.png";

function ErrorPage() {
    return(
        <div>
            <img src={errorImg} alt="error404" />
        </div>
    )
}

export default ErrorPage;