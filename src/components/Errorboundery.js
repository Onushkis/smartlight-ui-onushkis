import  React  from 'react'
import errorimg from '../images/error.png'

class ErrorBoundary extends React.Component {
    state = { hasError: false };
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        // errorService.log({ error, errorInfo });
    }
    render() {

        //---------Error message
        if (this.state.hasError) {
            return <img src={errorimg} />;
        }
        return this.props.children;
    }  
}

export default ErrorBoundary;