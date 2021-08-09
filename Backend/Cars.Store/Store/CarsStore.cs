
using Cars.Store.Context;
using Cars.Store.Interface;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Cars.Store.Store
{
    public class CarsStore : ICarsStore
    {
        CarsDbContext context = new CarsDbContext();
        public async Task<IEnumerable<Car>> Get()
        {
            return await context.Cars.ToListAsync();
        }

        public async Task<Car> Post(Car car)
        {
            await context.Cars.AddAsync(car).ConfigureAwait(false);
            await context.SaveChangesAsync();

            return car;
        }

        public async Task<Car> GetById(int id)
        {
            var car = await context.Cars.FindAsync(id);
            var carResult = await context.Cars.FindAsync(car.Id == id);

            if (carResult == null)
            {
                throw new ArgumentNullException("Car not found");
            }

            return carResult;
        }

        public async Task<Car> Put(Car car)
        {

            context.Entry(car).State = EntityState.Modified;
            await context.SaveChangesAsync();

            return car;

        }

        public async Task<Car> Delete(int id)
        {
            var car = await context.Cars.FindAsync(id);

            if (id == car.Id)
            {
                context.Cars.Remove(car);

                await context.SaveChangesAsync();
            }


            return car;
        }

    }
}
