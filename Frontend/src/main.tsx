import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import { Provider } from "react-redux";
import store from "./app/store.tsx";
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
const persistor = persistStore(store);

createRoot(document.getElementById("root")!).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
			<Toaster />
		</PersistGate>
	</Provider>
);
