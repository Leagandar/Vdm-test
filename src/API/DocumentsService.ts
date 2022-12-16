import { getDocuments } from "../mocs/documents";
import type { Document } from "../types";
import { fetchWrapper } from "./fetchWrapper";


const fetchDocuments = async (url: string): Promise<Document[]> => {
    // const data = getDocuments(url)

    // return new Promise((resolve) => {
    //     setTimeout(() => resolve(data), 1000)
    // })
    const { data } = await fetchWrapper(url);
    return data;
}

const cancelDocuments = async (documentIds: Document['id'][]): Promise<Document[]> => {
    const { data } = await fetchWrapper('/cancel', {
        body: JSON.stringify(documentIds),
    });

    return data;
}


export { fetchDocuments, cancelDocuments }