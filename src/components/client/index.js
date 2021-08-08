import {useState,useEffect} from 'react';

import {ClientContainer} from './client';

import api from '../../services/api';

const Client = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        const consult = async () => {
            const {data} = await api.get('/clients');

            setClients(data);
        }

        consult();
    }, []);
    return (
        <ClientContainer>
            {clients.map(item => (
                <a key={item.id} href={item.link}>
                    <img src={`asset/img/${item.image}`} alt={item.title} />
                </a>
            ))}
        </ClientContainer>
    );
}

export default Client;