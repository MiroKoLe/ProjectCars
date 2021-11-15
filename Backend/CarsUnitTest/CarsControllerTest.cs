using Microsoft.VisualStudio.TestTools.UnitTesting;
using ProjectCars.Controllers;

namespace CarsUnitTest
{
    using Cars.Manager;
    using Cars.Manager.Interface;
    using Cars.Store.Interface;
    using Cars.Store.Store;
    using Microsoft.AspNetCore.Mvc;
    using ProjectCars.Controllers; 

    [TestClass]
    public class CarsControllerTest
    {
        CarsController _controller;
        ICarsManager _carsManager;
        ICarsStore _carsStore;

        public CarsControllerTest()
        {
            _carsStore = new CarsStore();
            _carsManager = new CarsManager(_carsStore);
            _controller = new CarsController(_carsManager);
        }
        [TestMethod]
        public void Get_ListOfCars_Validate() 
        {
            var result = _controller.Get();

            Assert.IsNotNull(result.Result);

        }
        [TestMethod]
        public void GetById_UnknownIdPassed_ReturnsNotFoundResult()
        {
            var testId = 2; 
            var notFoundResult = _carsStore.GetById(testId);

            Assert.AreNotEqual(testId, notFoundResult);   

        }
    }
}
