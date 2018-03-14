import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'

import {configureStore} from './redux/store/configureStore';
import './assets/styles/index.css';
import AppRouter from './router';
import registerServiceWorker from './registerServiceWorker';

const { store, persistor }  = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <LocaleProvider locale={zhCN}>
            <PersistGate persistor={persistor}>
                <AppRouter />
            </PersistGate>
        </LocaleProvider>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
