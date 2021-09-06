using Cars.Manager;
using Cars.Manager.Interface;
using Cars.Store.Context;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProjectCars.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private readonly ICarsManager carsManager;

        public CarsController(ICarsManager _carsManager)
        {
            carsManager = _carsManager;
        }

        public async Task<IActionResult> Get()
        {
            var cars = await carsManager.Get().ConfigureAwait(false);

            return Ok(cars);
        }

        // GET api/<CarsController>/5
        [HttpGet("{id}")]
        public async Task<Car> GetById(int id)
        {
            var cars = await carsManager.GetById(id);
            //TODO: additional logic

            return cars; 
        }

        // POST api/<CarsController>
        [HttpPost]
        public async Task<ActionResult<Car>> Post([FromBody] Car car)
        {
            var cars = await carsManager.Get().ConfigureAwait(false);
            //not sure this is correct practice but it is how it is :)
            bool alreadyExist = cars.Any(x => x.Model == car.Model);
            if (alreadyExist)
            {
                throw new Exception("Car already exist");
            }
            await carsManager.Post(car);
            return CreatedAtAction(nameof(Cars), new { id = car.Id }, car);
        }


        // PUT api/<CarsController>/5
        [HttpPut]
        public async void Put([FromBody] Car car)
        {
            await carsManager.Put(car);
           
        }

        // DELETE api/<CarsController>/5
        [HttpDelete("{id}")]
        public async void Delete(int id)
        {
            if(id <= 0)
            {
             BadRequest("Not a valid Id");
            }

          
            await carsManager.Delete(id);
        }
    }
}
