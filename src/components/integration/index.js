import {useState,useEffect} from 'react';
import {IntegrationContainer,Item} from './integration';

import api from '../../services/api';

const Integration = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const consult = async () => {
            const {data} = await api.get('/services');

            setServices(data);
        }

        consult();
    }, []);

    console.log(services);

    return (
        <IntegrationContainer>
            {services.map(item => (
                <Item key={item.id}>
                    <img src={`asset/img/${item.image}`} alt={item.title} />
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </Item>
            ))}
        </IntegrationContainer>
    );
}

export default Integration;
