using System;
using System.Collections.Generic;
using System.Text;

namespace Cars.Store.Entities
{
    public class RegistrationResponse
    {
        public bool IsSuccessfulRegistration { get; set; }
        public IEnumerable<string> Errors { get; set; }
    }
}
