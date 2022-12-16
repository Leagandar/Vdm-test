import type { Document } from '../types';

const getDocuments = (url: string) => {
    const documents: Document[] = url === '/posts' ? [
        {
            id: '1',
            status: 'active',
            sum: 23,
            qty: 3,
            volume: 120,
            name: 'Table',
            delivery_date: 'Tue Aug 30 2022 01:53:19 GMT+0300 (Moscow Standard Time)',
            currency: 'USD',
        },
        {
            id: '2',
            status: 'archive',
            sum: 120,
            qty: 20000,
            volume: 10000,
            name: 'Chair',
            delivery_date: 'Sun Jul 10 2022 19:21:56 GMT+0300 (Moscow Standard Time)',
            currency: 'RUB',
        },
        {
            id: '3',
            status: 'active',
            sum: 5000,
            qty: 7800,
            volume: 2000,
            name: 'Pen',
            delivery_date: 'Mon Mar 21 2022 16:12:35 GMT+0300 (Moscow Standard Time)',
            currency: 'USD',
        },
        {
            id: '4',
            status: 'archive',
            sum: 10000,
            qty: 100,
            volume: 50000,
            name: 'Notebook',
            delivery_date: 'Tue Dec 21 2021 16:38:09 GMT+0300 (Moscow Standard Time)',
            currency: 'RUB',
        }
    ] : [
        {
            id: '5',
            status: 'active',
            sum: 140,
            qty: 10,
            volume: 1200,
            name: 'Mouse',
            delivery_date: 'Fri Jun 24 2022 09:20:04 GMT+0300 (Moscow Standard Time)',
            currency: 'USD',
        },
        {
            id: '6',
            status: 'archive',
            sum: 2320,
            qty: 40000,
            volume: 100000,
            name: 'Keyboard',
            delivery_date: 'Wed Aug 03 2022 18:07:37 GMT+0300 (Moscow Standard Time)',
            currency: 'RUB',
        },
        {
            id: '7',
            status: 'active',
            sum: 50000,
            qty: 78000,
            volume: 20000,
            name: 'Monitor',
            delivery_date: 'Wed Oct 12 2022 18:47:17 GMT+0300 (Moscow Standard Time)',
            currency: 'USD',
        },
        {
            id: '8',
            status: 'archive',
            sum: 3010000,
            qty: 3000,
            volume: 1110000,
            name: 'Headphones',
            delivery_date: 'Mon Apr 04 2022 18:11:08 GMT+0300 (Moscow Standard Time)',
            currency: 'RUB',
        }
    ]

    return documents
}

export { getDocuments }