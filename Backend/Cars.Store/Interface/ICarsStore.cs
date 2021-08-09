using Cars.Store.Context;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cars.Store.Interface
{
    public interface ICarsStore
    {
        Task<IEnumerable<Car>> Get();
        Task<Car> GetById(int id);
        Task<Car> Post(Car car);
        Task<Car> Put(Car car);

        Task<Car> Delete(int id);
    }
}
