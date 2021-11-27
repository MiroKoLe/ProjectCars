using Cars.Store.Context;
using Cars.Store.Entities;
using Cars.Store.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectCars.Controllers
{
    [Route("api/accounts")]
    [ApiController]
    public class RegistrationController : Controller
    {
        private readonly UserManager<User> _userManager;

        public RegistrationController(UserManager<User> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost("Registration")]
        public async Task<IActionResult> Registration([FromBody] UserForRegistration userForRegistration)
        {
            if (userForRegistration == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User user = new User()
            {
                FirstName = userForRegistration.FirstName,
                LastName = userForRegistration.LastName,
                Password = userForRegistration.Password,
                ConfirmPassword = userForRegistration.ConfirmPassword,
                Email = userForRegistration.Email,
                UserName = userForRegistration.Email
            };

            var result = await _userManager.CreateAsync(user, userForRegistration.Password);

            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(e => e.Description);

                return BadRequest(new RegistrationResponse { Errors = errors });
            }

            return StatusCode(201);
        }
    }
}
