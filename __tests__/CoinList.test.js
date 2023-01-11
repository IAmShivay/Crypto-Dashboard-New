import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CoinList from '../src/Components/Coin/CoinList';

const mockStore = configureStore();

test('CoinList renders correctly', () => {
    const store = mockStore({
        CryptoCurrency: 'usd',
        search: '',
    });

    const { asFragment } = render(
        <Provider store={store}>
            <CoinList />
        </Provider>
    );

    expect(asFragment()).toMatchSnapshot();
});
