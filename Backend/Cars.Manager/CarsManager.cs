using Cars.Manager.Interface;
using Cars.Store.Context;
using Cars.Store.Interface;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Cars.Manager
{
    public class CarsManager : ICarsManager
    {
        public readonly ICarsStore carsStore;
        public CarsManager(ICarsStore _carStore)
        {
            carsStore = _carStore;
        }

        public async Task<IEnumerable<Car>> Get()
        {
            return await carsStore.Get().ConfigureAwait(false);
        }

        public async Task<Car> GetById(int id)
        {
            return await carsStore.GetById(id);
        }

        public async Task<Car> Post(Car car)
        {
            return await carsStore.Post(car).ConfigureAwait(false); 
        }

        public async Task<Car> Put(Car car)
        {
            return await carsStore.Put(car).ConfigureAwait(false);
        }

        public async Task<Car> Delete(int id)
        {
            return await carsStore.Delete(id).ConfigureAwait(false);
        }
    }
}
