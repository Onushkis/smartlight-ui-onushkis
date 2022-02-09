import { React } from 'react'

class ErrorBoundary extends React.Component {
    render() {
    return this.props.children;
    }  
}