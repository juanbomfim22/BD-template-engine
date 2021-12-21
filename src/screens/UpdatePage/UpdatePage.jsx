import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';
import { api } from '../../services/api';
import styles from './styles.module.scss'

const initialState = {
    "id": '',
    "title": '',
    "price": '',
    "description": "",
    "category": "",
    "image": " ",
    "rating": {
        "rate": '',
        "count": ''
    }
}
function UpdatePage(props) {
    const { state } = useLocation();
    if(state === null){
        useEffect(() => {
            async function getInfo(){
                const { data } = await api.get(`products/${id}`)
            }
        }, [])
    }
    const { isNew } = props
    const { title, price, description, category, image, rating } = state || initialState
    
    let { id } = useParams()

    const [values, setValues] = useState({})

    function handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        setValues({
            ...values, 
            [name]: target.value
        });
    }

    async function handleSendMessage(e) {
        e.preventDefault()
        console.log(values, isNew)
        !isNew ? await api.put(`products/${id}`, {
            name: values.name,
            amount: values.amount,
            sales_avg: values.sales_avg,
            description: values.description,
            categories: values.categories
        }) : await api.post(`new`, {
            name: values.name,
            amount: values.amount,
            sales_avg: values.sales_avg,
            description: values.description,
            categories: values.categories
        })
    }
    return (
        <>
            <Header />
            <div className={styles.product_info}>
                <form onSubmit={handleSendMessage} action="" className={styles.sendMessageForm}>
                    <label > Imagem
                        <input type="file" multiple accept="image/*" onChange={handleInputChange} />

                    </label>
                    <label > Título
                        <input name="name" defaultValue={title} type="text" onChange={handleInputChange} />

                    </label>
                    <label > Categoria
                        <input name="categories" defaultValue={category} type="text" onChange={handleInputChange} />
                    </label>
                    <label > Quantidade
                        <input name="amount" defaultValue={rating.count} type="text" onChange={handleInputChange} />

                    </label>
                    <label > Avaliação
                        <input name="rate" defaultValue={rating.rate} type="number" min={0} max={5} step={0.1} onChange={handleInputChange} />

                    </label>
                    <label > Valor de venda (R$)
                        <input name="sales_avg" defaultValue={price} type="number" min={1} max={1000} step={0.1} onChange={handleInputChange} />

                    </label>
                    <label>
                        Descrição
                        <textarea onChange={handleInputChange} value={values.description}
                            name="description" id="message" cols={30} rows={10} maxLength={240}
                            placeholder="Descrição" />
                    </label>
                    <button type="submit">Enviar</button>
                </form>

                <img src={image} style={{}} width={200} height={"100%"} />

            </div>
        </>
    )
}

export default UpdatePage
