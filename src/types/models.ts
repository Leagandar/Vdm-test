interface Document {
	id: string;
	status: 'active' | 'archive';
	sum: number;
	qty: number;
	volume: number;
	name: string;
	delivery_date: string;
	currency: string;
}

interface TableRowDocument extends Omit<Document, 'delivery_date'> {
	delivery_date: Date,
	summary: string;
}

export type { Document, TableRowDocument }
