const AuthWrapper = (props) => {
    return (<div className="bg-surface-secondary py-5" style={{minHeight : "90vh"}}>
        <div className="container row justify-content-center align-items-center" style={{height : "100%"}}>
            <div className="col-lg-6 col"></div>
            <div className="col-lg-6 col">
                {props.children}
            </div>
        </div>
    </div>);
}

export default AuthWrapper;