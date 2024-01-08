import {ProviderWrapper } from '../../contexts/Context'
import App from './App';

const AppLoader = () => {
    return (

        <ProviderWrapper>
        <App />
        </ProviderWrapper>
    );
    };

export default AppLoader;