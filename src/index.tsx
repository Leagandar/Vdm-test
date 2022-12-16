import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<Provider store={store}>
		<CssBaseline />
		<App />
	</Provider>
);
