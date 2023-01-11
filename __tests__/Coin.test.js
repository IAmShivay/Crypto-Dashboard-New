import React from 'react';
import Coin from '../src/Components/Coin/Coin';
import renderer from 'react-test-renderer';

describe('Coin', () => {
  it('matches the snapshot', () => {
    const component = renderer.create(
      <Coin name="Bitcoin" marketcap={1000000} image="example.com/bitcoin.png" priceChange={0.5} currencyVal="usd" />
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});