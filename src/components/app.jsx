import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';
// TODO: remove this line and use Redux
const activeCity = { name: 'Paris', address: '16 Villa Gaudelet, 75011 Paris', slug: 'paris' };

const App = () => {
  return (
    <div className="app">
      <div className="cities">
        <CityList />
      </div>
      <ActiveCity activeCity={activeCity} />
    </div>
  );
};

export default App;
