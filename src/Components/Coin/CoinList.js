import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';
import { useSelector } from 'react-redux';

function CoinList() {

    const [coins, setCoins] = useState([]);

    const currencyVal = useSelector((state) => state.CryptoCurrency);

    const searchVal = useSelector((state) => state.search);


    useEffect(() => {
        axios
            .get(
                `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyVal}&order=market_cap_desc&per_page=50&page=1&sparkline=true`
            )
            .then((res) => {
                setCoins(res.data);
                console.log('COIN LIST', res.data);
            })
            .catch((error) => console.log(error));
    }, [currencyVal]);

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchVal.toLowerCase())
    );

    return (
        <div className="py-5 ">
            <div className="px-4 mb-8 xl:mb-9 lg:mb-6 font-bold text-xl tracking-wider text-stone-600">
                <h1 className='dark:text-gray-50'>Cryptocurrency by market cap</h1>
            </div>

            <div className="h-[44rem] lg:h-[41rem] xl:h-[44rem] overflow-y-scroll scrollbar-hide">
                {filteredCoins.map((coin) => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            marketcap={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                            currencyVal={currencyVal}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default CoinList;
