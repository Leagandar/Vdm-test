import { GridSelectionModel } from "@mui/x-data-grid";
import type { Document, TableRowDocument } from "../types";

const parseDocuments = (documents: Document[]): TableRowDocument[] => {
    const parsedDocuments: TableRowDocument[] = documents.map((doc) => ({
        ...doc,
        delivery_date: new Date(doc.delivery_date),
        summary: `${(doc.sum * doc.qty).toString()} ${doc.currency}`
    }));

    return parsedDocuments;
};

const getPropertyTotal = (documents: TableRowDocument[], property: keyof Pick<Document, 'qty' | 'sum' | 'volume'>): number => {
    let summary = 0;
    documents.forEach((doc) => summary += doc[property]);

    return summary;
};

const getIdsFromSelectionModel = (selectionModel: GridSelectionModel) => {
    return selectionModel.map((id) => id.toString());
}

const getDocumentsNameByIds = (documents: Document[], ids: Document['id'][]) => {
    const documentNames = documents.reduce((acc, { id, name }) => {
        if (ids.includes(id)) {
            acc.push(name)
        }

        return acc;
    }, [] as string[])

    return documentNames;
}

export { parseDocuments, getPropertyTotal, getIdsFromSelectionModel, getDocumentsNameByIds }