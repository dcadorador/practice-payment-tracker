
import { createContext, useState } from 'react';
import axios from '../api/axios';

const ApiContext = createContext(null);

function ApiProvider({children}) {
    const [integrations, setIntegrations] = useState([]);
    //const [payments, setPayments] = useState([]);
    //const [contacts, setContacts] = useState([]);

    const fetchIntegrations = async () => {
        const response = await axios.get('/integrations')
            .then(({data}) => {
                setIntegrations(data.data);
            })
            .catch(({response}) => {
                window.location.href = '/';
            });
    };

    const valueToShare = {
        integrations,
        fetchIntegrations
    };

    return (
        <ApiContext.Provider value={valueToShare}>
            {children}
        </ApiContext.Provider>
    );
}

export { ApiProvider };
export default ApiContext;